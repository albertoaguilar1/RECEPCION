import { Router } from 'express'
const router = Router();

import { getItems } from '../controllers/item'


router.route('/').
    get((getItems));


export default router;