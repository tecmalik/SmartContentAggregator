import { Router } from 'express';
import { createArticle, getArticles, getArticleById } from '../controllers/articleController';

const router = Router();

router.post('/', createArticle);
router.get('/', getArticles);
router.get('/:id', getArticleById);

export default router;