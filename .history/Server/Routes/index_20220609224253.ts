import express from 'express';
const router = express.Router();
import {DisplayHomePage} from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Me', page:'about' });
});
/* GET projects page. */
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'My Projects', page:'projects' });
});
/* GET services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'My Services', page:'services' });
});
/* GET contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Me', page:'contact' });
});

export default router;
