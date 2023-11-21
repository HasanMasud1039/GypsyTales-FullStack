const verifyJWT = (req, res, next) => {
    const authentication = req.headers.authentication;
    if (!authentication) {
        return res
            .status(401)
            .send({ error: true, message: "unauthorized access" });
    }

    const token = authentication.split(" ")[1];

    // verify a token symmetric
    jwt.verify(token, process.env.ACCESS_TOKEN_JWT, (err, decoded) => {
        if (err) {
            return res
                .status(401)
                .send({ error: true, message: "unauthorized access" });
        }

        req.decoded = decoded;
        next();
    });
};

module.exports = verifyJWT;