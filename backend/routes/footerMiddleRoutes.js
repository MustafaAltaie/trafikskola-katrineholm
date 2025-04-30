import express from 'express';
import MiddleLinks from '../models/footerMiddleSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const middleLinks = await MiddleLinks.findOne();
        res.json(middleLinks);
    } catch (err) {
        console.error(err),
        res.status(500).json({ message: 'Error reading middle links' });
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedLinks = await MiddleLinks.findByIdAndUpdate('footerMiddle_id', {_id: 'footerMiddle_id', ...req.body}, { new: true, upsert: true });
        res.status(200).json(updatedLinks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating middle links' });
    }
});

export default router;