import mongoose, { Schema } from 'mongoose';

const interactionSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    article_id: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
    interaction_type: { type: String, enum: ['view', 'like'], required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Interaction', interactionSchema);