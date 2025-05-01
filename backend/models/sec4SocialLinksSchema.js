import mongoose from 'mongoose';

const newLinks = new mongoose.Schema({
    _id: { type: String, default: 'singleton_section4_socialMedia_links' },
    link1: { type: String },
    link2: { type: String },
    link3: { type: String },
    link4: { type: String },
});

const Sec4MediaLinks = mongoose.model('Sec4MediaLink', newLinks);

export default Sec4MediaLinks;