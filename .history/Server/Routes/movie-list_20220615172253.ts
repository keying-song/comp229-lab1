import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayMovieList} from '../Controllers/movie-list';

router.get('/movie-list', DisplayMovieList);


export default router;