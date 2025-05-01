import express from 'express';
import PriceCards from '../models/pricePageSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newPrice = new PriceCards(req.body);
        const savedPrice = await newPrice.save();
        res.status(201).json(savedPrice);
    } catch (err) {
        console.error('Error occurred while creating price', err);
        res.status(500).json({ message: 'Ett fel uppstod vid sparandet.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const prices = await PriceCards.find();
        res.json(prices);
    } catch (err) {
        console.error('Error occurred while reading prices', err);
        res.status(500).json({ message: 'Ett fel uppstod vid att läsa priser.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPrice = await PriceCards.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedPrice);
    } catch (err) {
        console.error('Error occurred while updating price.', err);
        res.status(500).json({ message: 'Ett fel uppstod vid uppdateringen.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPrice = await PriceCards.findByIdAndDelete(id);
        res.json(deletedPrice);
    } catch (err) {
        console.error('Error occurred while deleting the price', err);
        res.status(500).json({ message: 'Ett fel uppstod vid radering priset.' });
    }
});

export default router;