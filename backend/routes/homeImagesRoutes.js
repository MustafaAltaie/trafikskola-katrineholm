import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const imageDir = path.join('images', 'home-images');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

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
    res.status(200).json({ path: `/home-images/${req.file.filename}` });
});

router.get('/', (req, res) => {
    fs.readdir(imageDir, (err, files) => {
        const images = files.map(file => `/home-images/${file}`);
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