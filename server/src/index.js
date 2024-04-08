const express = require('express')
// const multer  = require('multer');
// const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const connectDB = require('./db/server');
connectDB()
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());


// const upload = multer({ dest: 'uploads/' });

// app.post('/api/upload', upload.single('image'), (req, res) => {
//     const imagePath = path.join(__dirname, req.file.path);
//     res.send('File uploaded successfully.');
// });



const bookRouter = require('./routes/book/bookRouter');
const bookGenreRouter = require('./routes/book/bookGenreRouter');

const commentRouter = require('./routes/book/commentRouter')
const categoryRouter = require('./routes/book/categoryRouter');
const authorRouter = require('./routes/author/authorRouter')

const authRouter = require('./routes/user/authRouter');
const userRouter = require('./routes/user/userRouter');

const cartRouter = require('./routes/cart/cartRouter');

// const adminRouter = require('./routes/adminRouter')


// mongoose.connect(`${DB_URI}`).then(() => console.log("Database Connected!"));

app.get('/', (req, res) => {
    res.send("hello word")
});

// API BOOK
app.use('/api/v1/book', bookRouter);

app.use('/api/v1/bookGenre', bookGenreRouter)
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/comment/book', commentRouter);
app.use('/api/v1/category/book', categoryRouter);


// AUTHOR
app.use('/api/v1/author', authorRouter)
// AUTH
app.use('/api/v1/user', userRouter);
// CART
app.use('/api/v1/user/cart', cartRouter);


// ADMIN
// app.use('/admin',adminRouter)

// create port
const PORT = process.env.PORT || 8080
// start
app.listen(PORT, () => {
    console.log(`server đang chạy trên cổng ${PORT}`);
});
