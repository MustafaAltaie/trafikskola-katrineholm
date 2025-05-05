import express from 'express';
import IntegrityAndTerms from '../models/integrityAndTermSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await IntegrityAndTerms.findOne();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error reading integrity and terming:', err);
        res.status(500).json({ message: 'Ett fel uppstod vid hämtiningen av intergitet och villkor'});
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedData = await IntegrityAndTerms.findByIdAndUpdate('singleton_integrity_terms_id_address', { $set: req.body }, { new: true, upsert: true });
        res.status(201).json(updatedData);
    } catch (err) {
        console.error('Error occurred while updating data:', err);
        res.status(500).json({ message: 'Ett fel uppstod vid uppdateringen.' });
    }
});

export default router;