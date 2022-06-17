import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList} from '../Controllers/contact-list';
import
router.get('/contact-list', AuthGuard, DisplayContactList);
router.get('update', AuthGuard,  DisplayUpdatePage )

export default router;