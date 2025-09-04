import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    interests: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);