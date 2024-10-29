import { Router } from 'express';
import { getCandidatesByPositionId } from '../presentation/controllers/PositionController';

const router = Router();

router.get('/:id/candidates', getCandidatesByPositionId);

export default router;
