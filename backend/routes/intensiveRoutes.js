import express from 'express';
import IntensiveCards from '../models/intensiveSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newCard = new IntensiveCards(req.body);
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (err) {
        console.error('Error occurred while saving card:', err);
        res.status(500).json({ message: 'Ett fel uppstod vid sparandet.' })
    }
});

router.get('/', async (req, res) => {
    try {
        const cards = await IntensiveCards.find();
        if(!cards.length) return res.status(200).json([]);
        res.status(200).json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
        res.status(500).json({ message: 'Ett fel uppstod vid hämtning av intensiv data.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCard = await IntensiveCards.findByIdAndDelete(id);
        if(!deletedCard) return res.status(404).json({ message: 'Kortet hittades inte.' });
        res.status(204).send();
    } catch (err) {
        console.error('Error while  deleting intensive card:', err);
        res.status(500).json({ message: 'Ett fel uppstod vid radering av intensivkort.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCard = await IntensiveCards.findByIdAndUpdate(id, req.body, { new: true });
        if(!updatedCard) return res.status(404).json({ message: 'Intensiv kortet hittades inte.' });
        res.status(200).json(updatedCard);
    } catch (err) {
        console.error('Error occurred while updating intensive record:', err);
        res.status(500).json({ message: 'Ett fel uppstod vid uppdatering av intensiv data.' });
    }
});

export default router;