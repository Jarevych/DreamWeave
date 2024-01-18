const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXP,
    });
};

module.exports = createToken;