import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList, DisplayAddPage, ProcessAddPage} from '../Controllers/contact-list';
//display contact-list page
router.get('/contact-list', AuthGuard, DisplayContactList);
/* Display Add Page */
router.get('/add', AuthGuard, DisplayAddPage);

router.get('/edit', AuthGuard,  DisplayAddPage);

//process add page
router.post('/edit', ProcessAddPage);

export default router;