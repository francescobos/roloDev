import { Router } from 'express';
import { authenticateByToken } from '../../middleware/authByToken.js';

import { listContacts, createContact } from './controller.js';

const router = Router();

router.get('/', authenticateByToken, listContacts);
router.post('/create', authenticateByToken, createContact);

// router.get('/', (req, res) => {
//     res.send('Listner is running');
// });

//router.get('/last-oc', authenticateByToken, getLastOcNumbers);

export default router ;