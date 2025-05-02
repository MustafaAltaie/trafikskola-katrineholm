import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Create images directory if not exists
const imageDir = path.join('backend', 'images');
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'backend/images');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
    res.status(200).json({ path: `/images/${req.file.filename}` });
});

router.get('/', (req, res) => {
    fs.readdir(imageDir, (err, files) => {
        if (err) {
            console.error('Error reading images directory:', err);
            return res.status(500).json({ message: 'Failed to read image directory.' });
        }

        // Return full URLs for frontend to render
        const images = files.map(file => `/images/${file}`);
        res.status(200).json(images);
    });
});

router.delete('/:filename', (req, res) => {
    const filePath = path.join(imageDir, req.params.filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Failed to delete image:', err);
            return res.status(500).json({ message: 'Failed to delete image.' });
        }
        res.status(200).json({ message: 'Image deleted successfully.' });
    });
});

export default router;