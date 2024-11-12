import { logout } from "../data/users.js";
import { updateNav } from "../data/util.js";
import { html, render, page } from "../lib.js";

export async function showLogout(ctx) {
    await logout();
    updateNav();
    page.redirect("/");
}