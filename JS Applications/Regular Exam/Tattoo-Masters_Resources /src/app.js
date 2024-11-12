import { page } from "./lib.js";
import { updateNav } from "./utils.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHome } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { showRegister } from "./views/registerView.js";

page('/', showHome);
page('/register', showRegister);
page('/login', showLoginView);
page('/logout', logoutView);
page('/dashboard', showDashboardView);
page('/create', showCreateView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView);

page.start();

updateNav();