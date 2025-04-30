import mongoose from 'mongoose';

const newState = new mongoose.Schema({
    _id: { type: String, default: 'singleton_review_state' },
    reviewState: { type: Boolean, default: false }
});

const ReviewState = mongoose.model('ReviewStatus', newState);

export default ReviewState;