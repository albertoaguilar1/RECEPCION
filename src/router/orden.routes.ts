import { Router } from 'express'
const router = Router();



import { getOrders, createOrders } from '../controllers/orden'

router.route('/').get((getOrders));
router.route('/saveOrder').post((createOrders));

export default router;