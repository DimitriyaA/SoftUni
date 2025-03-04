import { Router } from "express";

import authService from "../services/authService.js";
import { AUTH_COOKIE_NAME } from "../config.js";
import { getErrorMessage } from '../utils/errorUtil.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const authController = Router();

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login', { pageTitle: 'TechStore | Login' });
});

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register', { pageTitle: 'TechStore | Register' });
});

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);

        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        res.render('auth/login', { error: getErrorMessage(err), user: { email } })
    }
});


authController.post('/register', isGuest, async (req, res) => {
    const userData = req.body;

    try {

        const token = await authService.register(userData);

        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        res.render('auth/register', { error: getErrorMessage(err), user: userData })
    }
});


authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);

    res.redirect('/');
});

export default authController;