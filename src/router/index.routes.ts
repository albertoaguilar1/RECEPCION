import { Router } from 'express'
const router = Router();

import { loadApi } from '../controllers/api'

router.route('/').
    get((loadApi));


export default router;


