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


router.post('/state', async (req, res) => {
    try {
        const newState = new ReviewState(req.body);
        const savedState = await newState.save();
        res.status(201).json(savedState);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/state', async (req, res) => {
    try {
        const reviewState = await ReviewState.findOne();
        console.log('Found reviewState:', reviewState);
        if (!reviewState) {
            return res.status(404).json({ message: 'No review state found' });
        }
        res.json(reviewState);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedState = await ReviewState.findByIdAndUpdate(id, req.body, { new: true, upsert: true });
        res.status(200).json(updatedState);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;