import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDelete } from "./views/delete.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showLogout } from "./views/logout.js";
import { showRegister } from "./views/register.js";

page("/", showHome);
page("/register", showRegister);
page("/login", showLogin);
page("/logout", showLogout);
page("/dashboard", showDashboard);
page("/create", showCreate);
page("/edit/:id", showEdit);
page("/delete/:id", showDelete);
page("/details/:id", showDetails);

updateNav();
page.start();