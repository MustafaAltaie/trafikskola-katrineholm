import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import educationRoutes from './routes/educationRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import footerTopRoutes from './routes/footerTopRoutes.js';
import FooterMiddleRoutes from './routes/footerMiddleRoutes.js';
import sec4SocialLinksRoutes from './routes/sec4SocialLinksRoutes.js';
import pricePageRoutes from './routes/pricePageRoutes.js';
import intensiveRoutes from './routes/intensiveRoutes.js';
import aboutImagesRoutes from './routes/aboutImagesRoutes.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/education', educationRoutes);
app.use('/api/review', reviewRouter);
app.use('/api/message', messageRoutes);
app.use('/api/footerTop', footerTopRoutes);
app.use('/api/footerMiddle', FooterMiddleRoutes);
app.use('/api/sec4MediaLinks', sec4SocialLinksRoutes);
app.use('/api/pricePage', pricePageRoutes);
app.use('/api/intensive', intensiveRoutes);
app.use('/about-images', express.static(path.join(__dirname, 'images', 'about-images')));
app.use('/api/aboutImages', aboutImagesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});