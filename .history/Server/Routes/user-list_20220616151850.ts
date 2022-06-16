import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayUserList} from '../Controllers/users';

router.get('/movie-list', AuthGuard, );


export default router;