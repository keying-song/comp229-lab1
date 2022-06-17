import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList, DisplayUpdatePage} from '../Controllers/contact-list';

router.get('/contact-list', AuthGuard, DisplayContactList);
router.get('update', AuthGuard,  DisplayUpdatePage

export default router;