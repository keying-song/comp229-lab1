import express from 'express';
const router = express.Router();
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage} from "../Controllers/auth";

/* GET login page. */
router.get('/login', DisplayLoginPage);
/* GET register page. */
router.get('/register', DisplayRegisterPage);


router.post('/login', P);
/* GET projects page. */
router.get('/projects', DisplayProjectsPage);
/* GET services page. */
router.get('/services',DisplayServicesPage);
/* GET contact page. */
router.get('/contact',DisplayContactPage);


export default router;
