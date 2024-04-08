const router = require("express").Router();
const authControllers = require('../../controllers/userController/authController');

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);


module.exports = router;