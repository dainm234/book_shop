const User = require('../../models/auth/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()

const authControllers = {
    registerUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!req.body.email || !req.body.password) {
                return res.status(400).json({ message: "Vui lòng cung cấp địa chỉ email và mật khẩu" });
            }

            const existingUser = await User.findOne({ email });
            if (existingUser !== null) {
                return res.status(400).json({ message: "Email này đã được đăng ký" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                email,
                password: hashedPassword
            });

            const user = await newUser.save();

            res.status(200).json(user);
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Đã xảy ra lỗi trong quá trình đăng ký người dùng" });
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            // check email 
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Email không tồn tại" })
            }
            //   check pass
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Mật khẩu không đúng' });
            }
            // tạo jwt
            const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET)
            console.log(token);
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json(error)
        }
    }
};

module.exports = authControllers;
