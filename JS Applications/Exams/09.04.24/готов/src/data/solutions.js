import { get, post, put, del } from "./request.js";

const endpoints = {
    allSolutions: "/data/solutions?sortBy=_createdOn%20desc",
    solutionById: "/data/solutions/",
    solution: "/data/solutions",
    addLike: "/data/likes",
    likeCounter: (solutionId) => `/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`,
    alreadyLiked: (solutionId, userId) => `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllSolutions() {
    return get(endpoints.allSolutions);
};

export async function getsolutionById(id) {
    return get(endpoints.solutionById + id);
};

export async function createSolution(type, imageUrl, description, learnMore) {
    return post(endpoints.solution, {
        type,
        imageUrl, 
        description, 
        learnMore      
    });
};

export async function updateSolution(id, type, imageUrl, description, learnMore) {
    return put(endpoints.solutionById + id, {
        type,
        imageUrl, 
        description, 
        learnMore
    });
};

export async function deleteSolution(id) {
    await del(endpoints.solutionById + id);
};

export async function addingLike(solutionId) {
    await post (endpoints.addLike, {solutionId})
};

export async function likeCount(solutionId) {
    return get(endpoints.likeCounter(solutionId))
};

export async function alreadyLikedByUser(solutionId, userId) {
    return get(endpoints.alreadyLiked(solutionId, userId))
};