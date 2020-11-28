const config = require("config");
const jwt = require("jsonwebtoken");
const jwtsecret = config.get("jwtsecret");

function auth(req, res, next) {
    const token = req.headers['x-auth-token'];

    //Check Token 
    if (!token) {
        return res.status(401).json({ msg: "Authorization denied" });
    }

    try {
        //Verify token
        const decoded = jwt.verify(token, jwtsecret);

        //Add user from payload
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error, msg: "Token is not valid" });
        return;
    }

}

module.exports = auth;