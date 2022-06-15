import express from 'express';
const router = express.Router();
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage} from "../Controllers/auth";

/* GET login page. */
router.get('/login', DisplayLoginPage);
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);
/* GET projects page. */
router.get('/projects', DisplayProjectsPage);
/* GET services page. */
router.get('/services',DisplayServicesPage);
/* GET contact page. */
router.get('/contact',DisplayContactPage);


export default router;
