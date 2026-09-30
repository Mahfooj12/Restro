const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/userModel");

const isVerifiedUser = async (req, res, next) => {
    try {
        // ✅ Cookie ka naam "token" hai
        const { token } = req.cookies;

        if (!token) {
            const error = createHttpError(401, "Please provide token!");
            return next(error);
        }

        // ✅ token use karein
        const decodeToken = jwt.verify(token, config.accessTokenSecret);
        const user = await User.findById(decodeToken._id);

        if (!user) {
            const error = createHttpError(401, "User not exist!");
            return next(error);
        }

        req.user = user;
        next();
    } catch (error) {
        const err = createHttpError(401, "Invalid Token!");
        next(err);
    }
}

module.exports = { isVerifiedUser };