import request from 'supertest';
import app from '../..';

describe('PUT /candidate/:id', () => {
    beforeAll(async () => {
        // Setup test data in the database
    });

    afterAll(async () => {
        // Clean up test data from the database
    });

    test('should update the stage for a valid candidate ID', async () => {
        const response = await request(app)
            .put('/candidate/1')
            .send({ newStage: 'Technical Interview' });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Candidate stage updated successfully');
    });

    test('should return 404 if the candidate ID does not exist', async () => {
        const response = await request(app)
            .put('/candidate/999')
            .send({ newStage: 'Technical Interview' });
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('No candidate 999 exists');
    });

    test('should return 400 if newStage is not provided', async () => {
        const response = await request(app)
            .put('/candidate/1')
            .send({});
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('newStage is required');
    });
});
