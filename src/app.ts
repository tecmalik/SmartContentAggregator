import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import articleRoutes from './routes/articleRoutes';
import userRoutes from './routes/userRoutes';
import interactionRoutes from './routes/interactionRoutes';

dotenv.config();
const app: Express = express();

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/content-aggregator')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/articles', articleRoutes);
app.use('/users', userRoutes);
app.use('/interactions', interactionRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

export default app;