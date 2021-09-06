import { Router } from 'express'
const router = Router();

import { getUsers } from '../controllers/user'

router.route('/').get((getUsers));
router.route('/saveUser').get((getUsers));


export default router;