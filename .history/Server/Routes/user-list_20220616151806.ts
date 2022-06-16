import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayUserList} from '../Controllers/movie-list';

router.get('/movie-list', AuthGuard, DisplayMovieList);


export default router;