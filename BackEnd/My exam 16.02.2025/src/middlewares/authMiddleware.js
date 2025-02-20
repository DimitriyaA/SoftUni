import jwt from 'jsonwebtoken';
import {
    JWT_SECRET,
    AUTH_COOKIE_NAME
} from '../config.js';

const auth = async (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];

    if (!token) {
        return next();
    };

    try {
        const decodedToken = await jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    } catch (err) {
        res.clearCookie(AUTH_COOKIE_NAME);
        return res.redirect('auth/login');
    }
}

const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    };

    next();
};

const isGuest = (req, res, next) => {
    if (req.user) {
        res.setError('You are already logged in!');
        return res.redirect('/')
    }
    next();
}

export {
    auth,
    isAuth,
    isGuest
};
