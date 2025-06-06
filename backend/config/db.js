import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB ✅')
    } catch (err) {
        console.log('Error connecting to db ❌');
        process.exit(1);
    }
}

export default connectDB;