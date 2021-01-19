const userDao = require('../daos/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_SECRET_KEY, JWT_EXPIRES_TIME } = process.env
const generatorAccessToken = async (userId) => {
    const accessToken = await jwt.sign({ userId },
        JWT_SECRET_KEY, { expiresIn: JWT_EXPIRES_TIME });
    return accessToken
}
const generateSalt = (rounds) => {
    return bcrypt.genSaltSync(rounds);
};
const hashBcrypt = (text, salt) => {
    const hashedBcrypt = new Promise((resolve, reject) => {
        bcrypt.hash(text, salt, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        });
    });
    return hashedBcrypt;
};
const compareBcrypt = async (data, hashed) => {
    const isCorrect = await new Promise((resolve, reject) => {
        bcrypt.compare(data, hashed, (err, same) => {
            if (err) reject(err);
            resolve(same);
        });
    });
    return isCorrect;
};
const register = async ({ email, password, againPassword, username, role }) => {
    if (password !== againPassword) {
        return { status: 0, data: "Mật khẩu không khớp" }
    }
    const findUser = await userDao.findUser({ email })
    if (findUser) {
        return { status: 0, data: "Tài khoản mail đang được đăng ký, vui lòng sử dụng tài khoản khác" }
    }
    const salt = generateSalt(10)
    password = await hashBcrypt(password, salt);
    const user = await userDao.createUser({ email, password, username, role })
    return { status: 1, data: user }
}
const login = async ({ email, password }) => {
    const user = await userDao.findUser({ email })
    if (!user) {
        return { status: 0, data: "Không tìm thấy User" }
    }
    const isCorrectPassword = await compareBcrypt(password, user.password)
    if (!isCorrectPassword) {
        return { status: 0, data: "Mật khẩu chưa đúng" }
    }
    const userId = user._id;
    const accessToken = await generatorAccessToken(userId);
    return { status: 1, data: accessToken }
}
module.exports = {
    register,
    login
}