import page from '../node_modules/page/page.mjs'

import { addSession } from './middleWares/session.js'
import { addRender } from './middleWares/render.js'

import {logout} from './api/user.js'

import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { catalogPage} from './views/catalog.js'
import { homePage } from './views/home.js'
import { editPage } from './views/edit.js'
import { registerPage } from './views/register.js'
import { loginPage } from './views/login.js'


import * as api from './api/games.js'
window.api = api;
/*
import * as api from './api/user.js'
window.api =api;*/


page(addSession)
page(addRender)

page('/', homePage)
page('/catalog', catalogPage)
page('/login',loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id',detailsPage)
page('/edit/:id', editPage)
page('/logout', onLogout)

page.start();

function onLogout(ctx){
    logout();    
    page.redirect('/catalog')
}