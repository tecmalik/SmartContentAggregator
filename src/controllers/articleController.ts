import { Request, Response } from 'express';
import Article from '../models/article';
import { SummaryService } from '../services/summaryService';

const summaryService = new SummaryService();

export const createArticle = async (req: Request, res: Response) => {
    try {
        const { title, content, author, summary } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({ error: 'Title, content, and author are required' });
        }

        let finalSummary = summary;
        if (!summary) {
            finalSummary = await summaryService.generateSummary(content);
        }

        const article = new Article({ title, content, author, summary: finalSummary });
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getArticles = async (req: Request, res: Response) => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;
        const offset = parseInt(req.query.offset as string) || 0;
        const articles = await Article.find().skip(offset).limit(limit);
        const total = await Article.countDocuments();
        res.status(200).json({ articles, total, limit, offset });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getArticleById = async (req: Request, res: Response) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};