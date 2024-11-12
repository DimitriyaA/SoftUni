import { logout } from "../data/users.js";

export async function logoutView() {
    console.log("Logging out view...")
    await logout()
}