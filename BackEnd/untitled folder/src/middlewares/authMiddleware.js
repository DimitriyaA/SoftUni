import jwt from 'jsonwebtoken';
import {
    JWT_SECRET,
    AUTH_COOKIE_NAME
} from '../config.js';

export const auth = async (req, res, next) => {
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

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    };

    next();
};

/*        const user = {
            _id: decodedToken._id,
            email: decodedToken.email,
            name: decodedToken.name
        };

        req.user = user;
        req.isAuthenticated = true;
        res.locals.userId = user._id;
        res.locals.userName = user.name;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true;

        return next();
    } catch (error) {
        res.clearCookie('auth');

        res.status(401).render('404');
    };

};

const isAuth = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect('/auth/login');
    };

    return next();
};

const isGuest = (req, res, next) => {
    if (!req.isAuthenticated) {
        return next();
    }

    return res.render('home', { error: 'You are already registered and logged!' });
}

export {
    authMiddleware,
    isAuth,
    isGuest
};
*/