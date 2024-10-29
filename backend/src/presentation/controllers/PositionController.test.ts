import request from 'supertest';
import app from '../..';

describe('GET /position/:id/candidates', () => {
    beforeAll(async () => {
        // Setup test data in the database
        // I used the localhost to test the API
    });

    afterAll(async () => {
        // Clean up test data from the database
    });

    test('should return candidates for a valid position ID', async () => {
        const response = await request(app).get('/position/1/candidates');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('should return 404 if no candidates exist for the position ID', async () => {
        const response = await request(app).get('/position/3/candidates');
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('No candidates exist for the id 3');
    });

    test('should return 404 if the position ID does not exist', async () => {
        const response = await request(app).get('/position/999/candidates');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('No position 999 exists');
    });
});
