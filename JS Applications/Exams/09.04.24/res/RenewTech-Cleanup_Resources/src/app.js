// src/app.js
import { setUserNav } from './router.js';
import { logout } from './api/api.js';

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();
