import express from 'express';
const router = express.Router();
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessRegisterPage} from "../Controllers/auth";

/* GET login page. */
router.get('/login', DisplayLoginPage);
/* GET register page. */
router.get('/register', DisplayRegisterPage);


router.post('/login', ProcessLoginPage);
/* GET projects page. */
router.post('/register', ProcessRegisterPage);
/* GET services page. */
router.get('/services',DisplayServicesPage);
/* GET contact page. */
router.get('/contact',DisplayContactPage);


export default router;
