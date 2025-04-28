import express from 'express';
const router = express.Router();
import Education from '../models/educationSchema.js';

router.post('/', async (req, res) => {
    try {
        const newEducation = new Education(req.body);
        const savedEducation = await newEducation.save();
        res.status(201).json(savedEducation);
    } catch (err) {
        console.error("Error saving education:", err);
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const educations = await Education.find();
        res.json(educations);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEducation = await Education.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedEducation);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEducation = await Education.findByIdAndDelete(id);
        res.json(deletedEducation);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;