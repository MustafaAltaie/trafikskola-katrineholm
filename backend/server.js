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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});