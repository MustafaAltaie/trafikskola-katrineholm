import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Create images directory if not exists
const imageDir = path.join('images', 'about-images');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, imageDir);
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
    res.status(200).json({ path: `/about-images/${req.file.filename}` });
});

router.get('/', (req, res) => {
    fs.readdir(imageDir, (err, files) => {
        const images = files.map(file => `/about-images/${file}`);
        res.status(200).json(images);
    });
});

router.delete('/:filename', (req, res) => {
    const filePath = path.join(imageDir, req.params.filename);

    fs.unlink(filePath, (err) => {
        res.status(200).send();
    });
});

export default router;