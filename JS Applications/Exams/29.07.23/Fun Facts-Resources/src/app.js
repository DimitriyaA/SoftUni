import { page } from "./lib.js";
import { updateNav } from "./utils.js";
import { addNewFactView } from "./views/addNewFact.js";
import { showDashboardView } from "./views/dashboadView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showLogout } from "./views/logoutView.js";
import { showRegisterView } from "./views/registerView.js";

page('/', showHomeView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', showLogout);
page('/dashboard', showDashboardView);
page('/addFact', addNewFactView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView);

page.start();

updateNav();