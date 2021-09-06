import { Router } from 'express'
const router = Router();

import { getOrderItems, createOrderItems } from '../controllers/orderitem'



router.route('/').get((getOrderItems));
router.route('/saveOrderItem').post((createOrderItems));

export default router;