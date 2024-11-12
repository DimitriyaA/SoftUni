import { del, get, post, put } from "./api.js"

const endpoints = {
    allItems: "/data/shoes?sortBy=_createdOn%20desc",
    items: '/data/shoes'
}

export async function getAllItems() {
    return await get(endpoints.allItems);
}

export async function createItem(data) {
    return await post(endpoints.items, data);
}

export async function getItemById(id) {
    return await get(`${endpoints.items}/${id}`);
}

export async function delItem(id) {
    return await del(`${endpoints.items}/${id}`);
}

export async function updateItem(id, data) {
    return await put(`${endpoints.items}/${id}`, data);
}

export async function searchPair(query) {
    return await get(`${endpoints.allItems}/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}