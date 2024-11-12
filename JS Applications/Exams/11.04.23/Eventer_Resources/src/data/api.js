import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030';

export async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) { // if the response is not OK -> error 
            const err = await response.json(); // каква е грешката

            if (response.status == 403 && err.message == 'Invalid access token') { // сървърът ни е изхвърлил и е унищожил token-a
                clearUserData(); // чистим данните и вадим error message
            }

            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;

        } else {
            return response.json();
        }

    } catch (err) {
        alert(err);
        throw err;
    }
}

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);