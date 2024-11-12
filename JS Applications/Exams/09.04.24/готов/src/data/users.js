import { post, get } from "./request.js";
import { clearUserData, setUserData } from "./util.js";

const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
}

//TODO adapt user profile to exam requirement (identity, extra properties, etc)
async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}

async function register(email, password) {
    const result = await post(endpoints.register, { email, password });
    setUserData(result);
}

async function logout(){
    const promise = get(endpoints.logout)
    clearUserData();

    await promise;
}

export {
    login,
    register,
    logout
}