const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const checkUser = await User.findOne({ username });
        if (checkUser) {
            return res.status(400).json({ message: 'Tài khoản đã tồn tại' });
        }

        // hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const createUser = new User({
            username,
            email,
            password: hash,
        });

        await createUser.save();
        res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { register };
