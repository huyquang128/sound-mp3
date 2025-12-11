const bcrypt = require('bcryptjs');
const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const redisClient = require('../helper/redis-config');

// handle redis save token
const saveTokenRedis = async (user, token) => {
    await redisClient.set(
        `refresh-token:${user._id}`,
        token,
        'EX',
        365 * 24 * 60 * 60
    );
};

// handle verify token redis
const verifyTokenRedis = async (user, token) => {
    const tokenStore = await redisClient.get(`refresh-token:${user._id}`);
    return (tokenStore = token);
};

// handle remove token redis
const removeTokenRedis = async (user) => {
    await redisClient.del(`refresh-token:${user._id}`);
};

// handle create access-token
const createAcessTokenJWT = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '30s',
        }
    );
};

// handle create refresh-token
const createRefreshTokenJWT = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: '365d',
        }
    );
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const checkUser = await User.findOne({
            $or: [{ email }, { username }],
        });
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

const login = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const checkUser = await User.findOne({
            $or: [{ username }, { email }],
        });
        if (!checkUser) {
            return res.status(400).json({
                message: 'Tài khoản hoặc email không đúng!!!',
            });
        }

        const isPasswordValid = bcrypt.compareSync(
            password,
            checkUser.password
        );
        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'Mật khẩu không đúng!!!',
            });
        }

        // Create token
        const accessToken = createAcessTokenJWT(checkUser);
        const refreshToken = createRefreshTokenJWT(checkUser);

        // save to redis
        await saveTokenRedis(checkUser, refreshToken);

        // save token to cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'none',
        });

        // data save to client
        const { password: _, ...data } = checkUser._doc;

        return res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
            data,
            accessToken,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: 'Bạn chưa đăng nhập' });
        }

        const decode = jwt.decode(refreshToken);
        if (!decode._id) {
            return res.status(401).json({ message: 'Token không hợp lệ' });
        }

        // check token redis store
        const isValidToken = await verifyTokenRedis(decode, refreshToken);
        if (!isValidToken) {
            return res
                .status(401)
                .json({ message: 'Token không phải của bạn' });
        }

        //verify token
        const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

        // create new token
        const newAccessToken = createAcessTokenJWT(payload);
        const newRefreshToken = createRefreshTokenJWT(payload);

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'none',
        });

        return res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
            data,
            accessToken: newAccessToken,
        });
    } catch (error) {
        console.log(err);
        return res
            .status(500)
            .json({ success: false, message: 'Server error' });
    }
};

const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (refreshToken) {
            const decode = jwt.decode(refreshToken);

            if (decode?._id) {
                await removeTokenRedis(decode);
            }
        }

        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });

        return res.json({
            success: true,
            message: 'Đăng xuất thành công',
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ success: false, message: 'Server error' });
    }
};

module.exports = { register, login, refreshToken, logout };
