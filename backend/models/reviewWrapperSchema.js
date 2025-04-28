import mongoose from 'mongoose';

const newState = new mongoose.Schema({
    reviewState: { type: Boolean }
});

const ReviewState = mongoose.model('ReviewStatus', newState);

export default ReviewState;