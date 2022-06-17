import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList, DisplayAddPage} from '../Controllers/contact-list';

router.get('/contact-list', AuthGuard, DisplayContactList);
router.get('/update', AuthGuard,  DisplayAddPage);

//process add page
router.post('/login', ProcessLoginPage);

export default router;