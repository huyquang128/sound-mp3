const jwt = require('jsonwebtoken');

const extractToken = (req) => {
    const authHeader = req.headers.authorication;
    if (!authHeader) return null;

    const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) return null;

    return token;
};

const middlewareVerifyToken = {
    verifyToken: (req, res, next) => {
        const token = extractToken(req);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Bạn chưa đăng nhập hoặc token không hợp lệ!!!',
            });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Token không hợp lệ hoặc đã hết hạn',
                });
            }

            if (!decode?._id) {
                return res.status(401).json({
                    success: false,
                    message: 'Thiếu thông tin cần thiết',
                });
            }

            req.user = decode;

            next();
        });
    },

    verifyAdminToken: (req, res, next) => {
        middlewareVerifyToken.verifyToken(req, res, () => {
            const user = req.user;

            if (user.role === 'admin' || user._id === req.params.id) {
                return next();
            }

            return res.status(403).json({
                success: false,
                message: 'Bạn không có quyền truy cập',
            });
        });
    },
};

module.exports = middlewareVerifyToken;
