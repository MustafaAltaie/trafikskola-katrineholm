import mongoose from "mongoose";

const newEducation = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    discount: { type: Number },
    list: [{ type: String }]
});

const Education = mongoose.model('education', newEducation);

export default Education;