import { Router } from 'express';
import { createInteraction } from '../controllers/interactionController';

const router = Router();

router.post('/', createInteraction);

export default router;