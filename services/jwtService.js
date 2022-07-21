require("dotenv").config()
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

exports.createToken = (user) => {
    try {
        let token = jwt.sign({
            id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        }, secret, {expiresIn:'1h'})
        return token
    } catch(err) {
        console.log(err)
        return null
    }
}

exports.decodeToken = (token) => {
    try {
        let decodedToken = jwt.verify(token, secret)
        return decodedToken
    } catch(error) {
        console.log(error)
        return null
    }
}