import { Request, Response } from 'express';
import Interaction from '../models/interaction';

export const createInteraction = async (req: Request, res: Response) => {
    try {
        const { user_id, article_id, interaction_type } = req.body;
        if (!user_id || !article_id || !interaction_type) {
            return res.status(400).json({ error: 'user_id, article_id, and interaction_type are required' });
        }
        const interaction = new Interaction({ user_id, article_id, interaction_type });
        await interaction.save();
        res.status(201).json(interaction);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};