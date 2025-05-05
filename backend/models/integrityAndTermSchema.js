import mongoose from 'mongoose';

const integrityAndTermsSchema = new mongoose.Schema({
    _id: { type: String, default: 'singleton_integrity_terms_id_address' },
    integrity: { type: String },
    terms: { type: String }
}, {timestamps: true});

const IntegrityAndTerms = mongoose.model('IntegrityAndTerms', integrityAndTermsSchema);

export default IntegrityAndTerms;