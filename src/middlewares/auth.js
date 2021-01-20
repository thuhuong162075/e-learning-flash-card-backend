const asyncMiddleware = require('./async');
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');
const authService = require('../services/auth');
const { ResponseResult } = require('../configs/ResponseResult');

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) throw new CustomError(codes.UNAUTHORIZED);
    const [tokenType, accessToken] = authorization.split(' ');

    if (tokenType !== 'Bearer') throw new Error(codes.UNAUTHORIZED);

    const user = await authService.verifyAccessToken(accessToken);
    req.user = user;
    if (['/auths/logout', '/auths/verify'].includes(req.path)) {
        req.accessToken = accessToken;
    }
    next();
};

const authAdmin = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) throw new CustomError(codes.UNAUTHORIZED);

    const [tokenType, accessToken] = authorization.split(' ');

    if (tokenType !== 'Bearer') throw new Error(codes.UNAUTHORIZED);

    const user = await authService.verifyAccessToken(accessToken);
    req.user = user;

    if (user.role !== "admin") {
        console.log("accesss", user, user.role !== "admin")
        return res.send({
            status: 0,
            code: codes.NOT_ROLE_ACCESS,
            message: "Không có quyền truy cập"
        })
    }
    if (['/auths/logout', '/auths/verify'].includes(req.path)) {
        req.accessToken = accessToken;
    }
    next();
}

module.exports = {
    auth: asyncMiddleware(auth),
    authAdmin: asyncMiddleware(authAdmin),
};
