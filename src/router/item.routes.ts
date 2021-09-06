import { Router } from 'express'
const router = Router();

import { getItems, createItems } from '../controllers/item'

router.route('/').get((getItems));
router.route('/saveItem').post((createItems));

export default router;