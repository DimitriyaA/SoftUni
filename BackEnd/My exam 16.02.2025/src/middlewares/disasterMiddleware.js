import disasterService from "../services/disasterService.js"

export const isOwner = async (req, res, next) => {
    const disasterId = req.params.disasterId;
    const disaster = await disasterService.getOne(disasterId);

    if (!disaster.owner.equals(req.user.id)) {
        res.setError('You are not owner of this event!');
        return res.redirect(`/disasters/${disasterId}/details`);
    }

    req.disaster = disaster;

    next();
};