import Disaster from "../models/Disaster.js";
import userID from "../controllers/disasterController.js"

export const getLatest = () => Disaster.find({}).sort({ createdAt: 'desc' }).limit(3);

export const getAll = (filter = {}) => {
    let query = Disaster.find({});

    if (filter.owner) {
        query = query.find({ owner: filter.owner });
    }

    if (filter.selectedBy) {
        query = query.find({ interestedList: filter.selectedBy });
    }

    if (filter.name) {
        items.find({ name: { $regex: query.name, $options: 'i' } });
    };

    if (filter.type) {
        items.find({ type: query.type });
    };

    return query;
}


export const getOne = (disasterId) => Disaster.findById(disasterId);

export const create = (disasterData, userID) => Disaster.create({ ...disasterData, owner: userID });

export const interested = async (disasterId, userId) => {
    const disaster = await Disaster.findById(disasterId);

    if (disaster.owner.equals(userId)) {
        throw new Error('Cannot show interest in your own event!');
    }

    if (disaster.interestedList.includes(userId)) {
        throw new Error(`You've already been interested in this event!`)
    }

    disaster.interestedList.push(userId);

    return disaster.save();
};


export const remove = async (disasterId, userId) => {
    const disaster = await getOne(disasterId);
    if (!disaster.owner.equals(userId)) {
        throw new Error('Only owner can delete this event!')
    }

    return Disaster.findByIdAndDelete(disasterId);
}

export const update = async (disasterId, userId, disasterData) => {
    const disaster = await getOne(disasterId);
    if (!disaster.owner.equals(userId)) {
        throw new Error('Only owner can edit this event!')
    }

    return Disaster.findByIdAndUpdate(disasterId, disasterData, { runValidators: true });
};

const disasterService = {
    getAll,
    getOne,
    getLatest,
    create,
    interested,
    update,
    remove
};

export default disasterService;