import express from 'express';
const router = express.Router();
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessRegisterPage} from "../Controllers/auth";

/* GET login page. */
router.get('/login', DisplayLoginPage);
/* GET register page. */
router.get('/register', DisplayRegisterPage);

//process login page
router.post('/login', ProcessLoginPage);
//process register page. */
router.post('/register', ProcessRegisterPage);
//process logout page
router.get('/services',DisplayServicesPage);



export default router;
