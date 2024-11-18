import '../modules/_appRelated/loadEnv.js'

import jwt from 'jsonwebtoken';
console.log(process.env.SALT_TOKEN);

export const authenticateByToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.sendStatus(401); // Nessun token fornito

    jwt.verify(token, process.env.SALT_TOKEN, (err, tokenPayload) => {
        if (err) return res.sendStatus(403); // Token non valido o scaduto

        req.tokenPayload = tokenPayload;
        next();
    });
}