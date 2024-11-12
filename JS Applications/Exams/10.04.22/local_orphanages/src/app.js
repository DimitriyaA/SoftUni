import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";

import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editsView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";

const main = document.querySelector("#main-content");

updateNav();

document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", dashboardView);
page("/details/:id", detailsView);
page("/edit/:id", editsView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/profile", profileView);

page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.updateNav = updateNav;
  ctx.userData = getUserData();

  next();
}
function renderMain(templateResult) {
  render(templateResult, main);
}

function updateNav() {
  const userData = getUserData();
  if (userData) {
    document.getElementById("user").style.display = "inline";
    document.getElementById("guest").style.display = "none";
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline";
  }
}

function onLogout() {
  logout();
  updateNav();
  page.redirect("/");
}
