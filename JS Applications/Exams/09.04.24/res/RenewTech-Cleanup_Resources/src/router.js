// src/router.js
import page from "../../node_modules/page/page.mjs";
import { render } from "../../../node_modules/lit-html/lit-html.js";
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { dashboardView } from './views/dashboardView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

const main = document.querySelector('main');

page('/', decorateContext, homeView);
page('/login', decorateContext, loginView);
page('/register', decorateContext, registerView);
page('/dashboard', decorateContext, dashboardView);
page('/create', decorateContext, createView);
page('/details/:id', decorateContext, detailsView);
page('/edit/:id', decorateContext, editView);

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

export function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}
