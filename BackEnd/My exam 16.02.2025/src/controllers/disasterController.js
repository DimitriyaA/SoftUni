import { Router } from "express";

import disasterService from "../services/disasterService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { isOwner } from "../middlewares/disasterMiddleware.js";
import { getErrorMessage } from "../utils/errorUtil.js";

const disasterController = Router();

disasterController.get('/', async (req, res) => {
    const disasters = await disasterService.getAll();

    res.render('disasters/catalog', { disasters, pageTitle: 'PowerOfNature | Catalog' });

});

disasterController.get('/create', isAuth, (req, res) => {
    res.render('disasters/create', { pageTitle: 'PowerOfNature | Create Disaster' })
});

disasterController.post('/create', isAuth, async (req, res) => {
    const disasterData = req.body;
    const userID = req.user.id;

    try {
        await disasterService.create(disasterData, userID);
        res.redirect('/disasters');
    } catch (err) {
        return res.render('disasters/create', {
            disaster: disasterData,
            error: getErrorMessage(err),
        });
    }
});

disasterController.get('/:disasterId/details', async (req, res) => {
    const disasterId = req.params.disasterId;

    const disaster = await disasterService.getOne(disasterId);

    const isOwner = req.user && req.user.id === disaster.owner.toString();
    const isInterested = disaster.interestedList.includes(req.user?.id);

    res.render('disasters/details', { disaster, pageTitle: 'PowerOfNature | Details', isOwner, isInterested });
});

disasterController.get('/:disasterId/interested', isAuth, async (req, res) => {
    const disasterId = req.params.disasterId;
    const userId = req.user.id;

    try {
        await disasterService.interested(disasterId, userId);
    } catch (err) {
        res.setError(getErrorMessage(err));
    }

    res.redirect(`/disasters/${disasterId}/details`);
});

disasterController.get('/search', async (req, res) => {
    const query = req.filter;

    try {
        const disasters = await disasterService.getAll(query).lean(); // sort()

        res.render('disasters/search', { disasters, query });
    } catch (err) {
        return res.render('disasters/search', { error: getErrorMessage(err) });
    }
});

disasterController.get('/:disasterId/delete', isAuth, async (req, res) => {
    const disasterId = req.params.disasterId;

    try {
        await disasterService.remove(disasterId, req.user.id);

        res.redirect('/disasters');
    } catch (err) {
        res.setError(getErrorMessage(err));
        res.redirect(`/disasters/${disasterId}/details`);
    }
});

disasterController.get('/:disasterId/edit', isAuth, isOwner, async (req, res) => {

    res.render('disasters/edit', { disaster: req.disaster });
});

disasterController.post('/:disasterId/edit', isAuth, async (req, res) => {
    const disasterId = req.params.disasterId;
    const userId = req.user.id;
    const disasterData = req.body;

    try {
        await disasterService.update(disasterId, userId, disasterData);

        return res.redirect(`/disasters/${disasterId}/details`);
    } catch (err) {
        res.render('disasters/edit', {
            disaster: disasterData,
            error: getErrorMessage(err)
        });
    }
});

export default disasterController;