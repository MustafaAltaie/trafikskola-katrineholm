import express from 'express';
import Review from '../models/reviewSchema.js';
import ReviewState from '../models/reviewWrapperSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);
        res.json(deletedReview);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/state', async (req, res) => {
    try {
        const reviewState = await ReviewState.findOne();
        if (!reviewState) {
            const reviewState = ReviewState({ reviewState: false });
            await reviewState.save();
        }
        res.json(reviewState);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedState = await ReviewState.findByIdAndUpdate('singleton_review_state', { _id: 'singleton_review_state', ...req.body }, { new: true, upsert: true });
        res.status(200).json(updatedState);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating review state' });
    }
});

export default router;