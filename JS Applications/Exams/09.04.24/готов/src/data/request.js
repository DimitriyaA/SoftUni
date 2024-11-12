import { clearUserData, getUserData } from "./util.js";

const host = "http://localhost:3030"

async function request(method, url, data) {
    const option = {
        method,
        headers: {}
    }

    if (data) {
        option.headers["Content-Type"] = "application/json"
        option.body = JSON.stringify(data)
    }

    const userData = getUserData();

    if (userData) {
        option.headers["X-Authorization"] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, option);

        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
 
    } catch (err) {
        //TODO add custom error handling and visualization based on exam requirements
        alert(err.message);
        throw err;
    }
}

function get(url) {
    return request("GET", url)
}

function post(url, data){
    return request("POST", url, data)
}

function put(url, data){
    return request("PUT", url, data)
}

function del(url) {
    return request("DELETE", url)
}

export {
    get,
    post,
    put,
    del
}