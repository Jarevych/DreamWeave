const User = require('../models/userModel')

const checkDublicate = async (email) => {
    return await User.findOne({email})
}

module.exports = checkDublicate;
