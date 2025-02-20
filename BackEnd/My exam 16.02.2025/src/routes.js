import { Router } from 'express';
import homeController from './controllers/homeController.js';
import disasterController from './controllers/disasterController.js'
import authController from './controllers/authController.js';

const router = Router();

router.use(homeController);
router.use('/auth', authController);
router.use('/disasters', disasterController);
router.use('/disasters/search', disasterController);


router.all('*', (req, res) => {
    res.render('404', { pageTitle: 'PowerOfNature | Page Not Found' });
})

export default router;