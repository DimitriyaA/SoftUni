import page from '../node_modules/page/page.mjs';
import { logout } from './utility/logout.js';
import { updateNav } from './utility/updateNav.js';
import { showCreateView } from './views/createView.js';
import { showDashboardView } from './views/dashboardView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { showRegisterView } from './views/registerView.js';
import { showSearchView } from './views/searchView.js';

//showHomeView();
page('/', () => console.log('home'));
page('/dashboard', () => console.log('dashboard'));
page('/register', () => console.log('register'));
page('/login', () => console.log('login'));
page('/logout', () => console.log('logout'));
page('/creat', () => console.log('creat'));
page('/details/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'))
page('/search', () => console.log('search'));

page.start();
//updateNav();
