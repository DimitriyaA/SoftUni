import { page } from "../lib.js";
import * as userService from "../data/user.js";
import { updateNav } from "../utils.js";

export async function showLogout() {
    await userService.logout();
    updateNav();
    page.redirect("/");
}