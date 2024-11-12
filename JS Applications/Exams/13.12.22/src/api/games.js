import * as api from './api.js'

const endpoints = {
    recent: '/data/products?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/products?sortBy=_createdOn%20desc',
    create:'/data/products',
    byId: '/data/products/',
    deleteById: '/data/products/',
    update: '/data/products/',
    bought: '/data/bought?where=productId%3D%22'
};

export async function getRecent(){
    return api.get(endpoints.recent);
}

export async function getAll(){
    return api.get(endpoints.games)
}

export async function create(data){
    return api.post(endpoints.create,data)
}

export async function getById(id){
    return api.get(endpoints.byId + id)
}

export async function update(id,data){
    return api.put(endpoints.update + id,data)
}


export async function deleteById(id){
    return api.del(endpoints.deleteById + id);

}

export async function bought(id){
    const plus = '%22&distinct=_ownerId&count'
    return api.get(endpoints.bought + id + plus);
}