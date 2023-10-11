const express = require('express');
const router = express.Router();
const cors = require('cors');
const {registerUser, loginUser} = require('../controllers/authController')

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    credentials: true,
    optionSuccessStatus: 200
}

router.use(
    cors(corsOptions)
);

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router