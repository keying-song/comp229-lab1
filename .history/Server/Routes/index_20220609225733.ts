import express from 'express';
const router = express.Router();
import {DisplayAboutPage, DisplayHomePage, DisplayProjectsPage} from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);
/* GET projects page. */
router.get('/projects', DisplayProjectsPage);
/* GET services page. */
router.get('/services',Display);
/* GET contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Me', page:'contact' });
});

export default router;
