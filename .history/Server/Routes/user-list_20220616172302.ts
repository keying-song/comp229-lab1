import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList} from '../Controllers/contacts';

router.get('/user-list', AuthGuard, DisplayContactList);


export default router;