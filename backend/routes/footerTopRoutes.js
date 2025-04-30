import express from 'express';
import FooterLinks from '../models/footerTopSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const readLinks = await FooterLinks.findOne();
        res.json(readLinks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error reading dat' });
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedLinks = await FooterLinks.findByIdAndUpdate('singleton_footer', { _id: 'singleton_footer', ...req.body }, { new: true, upsert: true });
        res.status(200).json(updatedLinks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating data', err });
    }
});

export default router;