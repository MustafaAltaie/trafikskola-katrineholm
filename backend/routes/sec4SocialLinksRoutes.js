import express from 'express';
import Sec4MediaLinks from '../models/sec4SocialLinksSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const links = await Sec4MediaLinks.findOne();
        res.json(links);
    } catch (err) {
        console.log('Error reading links', err);
        res.status(500).json({ message: 'Fel uppstod' });
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedLinks = await Sec4MediaLinks.findByIdAndUpdate('singleton_section4_socialMedia_links', { _id: 'singleton_section4_socialMedia_links', ...req.body }, { new: true, upsert: true });
        res.status(200).json(updatedLinks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating section 4 links' });
    }
});

export default router;