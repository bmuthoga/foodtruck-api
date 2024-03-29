import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

// Token expiration duration
const TOKENTIME = 60*60*24*30; // 30 days
// Secret used to decode token. Should be kept secret
const SECRET = "W3 Hav3 th3 kn0w h0w";

let authenticate = expressJwt({ secret: SECRET });

// The next indicates that this is middleware
let generateAccessToken = (req, res, next) => {
    req.token = req.token || {};
    req.token = jwt.sign({
        id: req.user.id
    }, SECRET, {
        expiresIn: TOKENTIME // 30 days
    });
    next();
};

let respond = (req, res) => {
    res.status(200).json({
        user: req.user.username,
        token: req.token
    });
};

module.exports = {
    authenticate,
    generateAccessToken,
    respond
};
