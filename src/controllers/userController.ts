import { Request, Response } from 'express';
import User from '../models/users';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, interests } = req.body;
        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }
        const user = new User({ username, interests: interests || [] });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Username already exists' });
    }
};