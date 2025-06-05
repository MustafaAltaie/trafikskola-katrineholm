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
import homeImageRoutes from './routes/homeImageRoutes.js';
import integrityAndTerm from './routes/integrityAndTermRoutes.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://katrineholm-trafikskola.netlify.app',
  'https://katrineholm-trafikskola.uk',
  'https://www.katrineholm-trafikskola.uk',
]
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin.toLowerCase())) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions));

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
app.use('/home-images', express.static(path.join(__dirname, 'images', 'home-images')));
app.use('/api/homeImages', homeImageRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/integrityAndTerm', integrityAndTerm);

app.get('/ping', (req, res) => res.send('pong'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});