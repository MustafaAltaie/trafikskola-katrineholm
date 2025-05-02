import mongoose from 'mongoose';

const newIntensive = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    discount: { type: String },
    list: [{ type: String }],
});

const IntensiveCards = mongoose.model('IntensiveCard', newIntensive);

export default IntensiveCards;