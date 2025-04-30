import mongoose from 'mongoose';

const newLinks = new mongoose.Schema({
    _id: { type: String, default: 'singleton_footer' },
    mobile: { type: String },
    messenger: { type: String },
    location: { type: String },
});

const FooterLinks = mongoose.model('FooterLink', newLinks);

export default FooterLinks;