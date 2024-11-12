import { del, get, post, put } from "./api.js"

const endpoints = {
    allItems: '/data/tattoos?sortBy=_createdOn%20desc',
    itemById: '/data/tattoos/',
    item: '/data/tattoos'
}

export async function getAllItems() {
    return await get(endpoints.allItems);
}

export async function createItem(type, imageUrl, description, userType) {
    return await post(endpoints.item, {
        type,
        imageUrl,
        description,
        userType
    });
}

export async function getItemById(id) {
    return await get(endpoints.itemById + id);
}

export async function updateItem(id, data) {
    return await put(endpoints.itemById + id, data);
}

export async function deleteItem(id) {
    return await del(endpoints.itemById + id);
}