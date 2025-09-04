import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/content-aggregator');
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Article API', () => {
    it('should create an article with generated summary', async () => {
        const res = await request(app)
            .post('/articles')
            .send({
                title: 'Test Article',
                content: 'This is a test article content.',
                author: 'Malik',
                summary: '',
            });
        expect(res.status).toBe(201);
        expect(res.body.summary).toContain('Generated summary');
    });
});