import { page } from "./lib.js";
import { updateNav } from "./utils.js";
import { showCreate } from "./views/createView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showDetails } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHome } from "./views/homeView.js";
import { showLogin } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { showRegister } from "./views/registerView.js";
import { showSearchView } from './views/search.js';

page('/', showHome);
page('/register', showRegister);
page('/login', showLogin);
page('/logout', logoutView);
page('/dashboard', showDashboard);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEditView);
page('/search', showSearchView)

page.start();

updateNav();