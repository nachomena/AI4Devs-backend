import { Request, Response } from 'express';
import PositionService from '../../application/services/PositionService';

export const getCandidatesByPositionId = async(req: Request, res: Response) => {
    const positionId = parseInt(req.params.id);

    try {
        const candidates = await PositionService.getCandidatesByPositionId(positionId);
        return res.json(candidates);
    } catch (error) {
        if (error instanceof Error && error.message.includes('No position')) {
            return res.status(404).json({ error: error.message });
        }
        if (error instanceof Error && error.message.includes('No candidates')) {
            return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

