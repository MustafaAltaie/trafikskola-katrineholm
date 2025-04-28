import mongoose from 'mongoose';

const newReview = new mongoose.Schema ({
    name: { type: String },
    age: { type: Number },
    message: { type: String },
    rating: { type: Number, required: true }
});

const Review = mongoose.model('reviews', newReview);

export default Review;