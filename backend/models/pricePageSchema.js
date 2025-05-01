import mongoose from 'mongoose';

const newPrice = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: String },
}, { timestamps: true });

const PriceCards = mongoose.model('PriceCard', newPrice);

export default PriceCards;