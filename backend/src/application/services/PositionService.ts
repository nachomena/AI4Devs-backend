import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PositionService {
    static async getCandidatesByPositionId(positionId: number) {
        const position = await prisma.position.findUnique({
            where: { id: positionId },
        });

        if (!position) {
            throw new Error(`No position ${positionId} exists`);
        }

        const candidates = await prisma.application.findMany({
            where: { positionId },
            include: {
                candidate: true,
                interviews: true,
            },
        });

        if (candidates.length === 0) {
            throw new Error(`No candidates exist for the id ${positionId}`);
        }

        return candidates.map(application => ({
            fullName: `${application.candidate.firstName} ${application.candidate.lastName}`,
            current_interview_step: application.currentInterviewStep,
            average_score: application.interviews.reduce((acc, interview) => acc + (interview.score || 0), 0) / application.interviews.length,
        }));
    }
}

export default PositionService;
