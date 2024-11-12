import { del, get, post, put } from "./api.js";

const endpoints = {
    allFacts: "/data/facts?sortBy=_createdOn%20desc",
    facts: "/data/facts",
}

export async function getAllFacts() {
    return await get(endpoints.allFacts);
}

export async function createFact(data) {
    return await post(endpoints.facts, data);
}

export async function getFactById(id) {
    return await get(endpoints.facts + `/${id}`);
}

export async function updateFact(id, data) {
    return await put(endpoints.facts + `/${id}`, data);
}

export async function deleteFact(id) {
    return await del(endpoints.facts + `/${id}`);
}

