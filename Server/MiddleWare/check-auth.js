const JWT = require("jsonwebtoken");

module.exports = (res, req, next) => {
    try{
    let token = req.headers["authorization"].split(' ')[2];
    const decoded = JWT.verify(token, process.env.APP_SECRET);
    req.userData = decoded;
    next();
} catch(err) {
    return res.status(402).json({
        "message": "Not Authorized",
    })
}

}