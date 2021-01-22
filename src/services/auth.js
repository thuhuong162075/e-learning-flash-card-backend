const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userDao = require('../daos/user');
const CustomError = require('../errors/CustomError');
const { JWT_SECRET_KEY, JWT_EXPIRES_TIME } = process.env;

const generateAccessToken = async (userId) => {
	const accessToken = await jwt.sign({ userId }, JWT_SECRET_KEY, {
		expiresIn: JWT_EXPIRES_TIME,
	});
	return accessToken;
};

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

const register = async ({ email, password, username, role }) => {
	const findUser = await userDao.findUser({ email });
	if (findUser) {
		return {
			status: 0,
			data: 'Tài khoản mail đang được đăng ký, vui lòng sử dụng tài khoản khác',
		};i
	}
	const salt = generateSalt(10);
	password = await hashBcrypt(password, salt);
	const user = await userDao.createUser({ email, password, username, role });
	return { status: 1, data: user };
};

const login = async ({ email, password }) => {
	const user = await userDao.findUser({ email });
	if (!user) throw new CustomError(errorCodes.USER_NOT_FOUND);
	const isCorrectPassword = await compareBcrypt(password, user.password);
	if (!isCorrectPassword) throw new CustomError(errorCodes.WRONG_PASSWORD);
	const accessToken = await generateAccessToken(user._id);
	return {
		status: 1,
		data: { token: accessToken, role: user.role, username: user.username },
	};
};

const verifyAccessToken = async (accessToken) => {
	const data = await jwt.verify(accessToken, JWT_SECRET_KEY);
	const { userId } = data;
	const user = await userDao.findUser({ _id: userId });
	return user;
};

module.exports = {
	register,
	login,
	verifyAccessToken,
};
