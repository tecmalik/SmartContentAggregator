import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Article', articleSchema);