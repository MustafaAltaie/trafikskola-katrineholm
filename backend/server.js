import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import educationRoutes from './routes/educationRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/education', educationRoutes);
app.use('/api/review', reviewRouter);
app.use('/api/message', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});