// src/api/api.js
const host = 'http://localhost:3030/admin';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.json();
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function getOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = sessionStorage.getItem('authToken');
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return options;
}

// Example API requests
export async function login(email, password) {
    return await request('/users/login', getOptions('post', { email, password }));
}

export async function register(email, password) {
    return await request('/users/register', getOptions('post', { email, password }));
}

export async function logout() {
    return await request('/users/logout', getOptions());
}

export async function getAllSolutions() {
    return await request('/data/solutions?sortBy=_createdOn%20desc', getOptions());
}

export async function getSolutionById(id) {
    return await request('/data/solutions/' + id, getOptions());
}

export async function createSolution(solution) {
    return await request('/data/solutions', getOptions('post', solution));
}

export async function editSolution(id, solution) {
    return await request('/data/solutions/' + id, getOptions('put', solution));
}

export async function deleteSolution(id) {
    return await request('/data/solutions/' + id, getOptions('delete'));
}

setUserNav();