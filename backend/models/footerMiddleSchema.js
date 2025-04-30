import mongoose from 'mongoose';

const newFooterMiddle = new mongoose.Schema({
    _id: { type: String, default: 'footerMiddle_id' },
    link1: { type: String },
    link2: { type: String },
    link3: { type: String },
});

const FooterMiddleLinks = mongoose.model('FooterMiddleLink', newFooterMiddle);

export default FooterMiddleLinks;