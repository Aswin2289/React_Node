const user = require("../models/User");
const jwt = require('jsonwebtoken');
function tokenGenerate(res){
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const expiresIn = '15m';
    let data = {
        time: Date(),
        userId: res._id,
        email:res.email,
        password: res.password,

    }
  
    const token = jwt.sign(data, jwtSecretKey,{ expiresIn });
    return token
}

function generateRefreshToken(res){
    let jwtSecretKey = process.env.JWT_REFRESH_SECRET_KEY;
    const expiresIn = '1d';
    let data = {
        time: Date(),
        userId: res._id,
        email:res.email,
        password: res.password,
    }
  
    const token = jwt.sign(data, jwtSecretKey,{ expiresIn });
    return token
}

function verify(req){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return verified;
            // return res.send("Successfully Verified");
        }else{
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
}
module.exports={tokenGenerate,generateRefreshToken,verify}