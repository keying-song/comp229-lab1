import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList, DisplayAddPage, ProcessAddPage} from '../Controllers/contact-list';
//get pages
router.get('/contact-list', AuthGuard, DisplayContactList);
router.get('/update', AuthGuard,  DisplayAddPage);

//process add page
router.post('/update', ProcessAddPage);

export default router;