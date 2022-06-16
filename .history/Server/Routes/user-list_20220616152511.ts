import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayUserList} from '../Controllers/users';

router.get('/user-list', AuthGuard, DisplayUserList);


export default router;