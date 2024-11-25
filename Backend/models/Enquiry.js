import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['sculpture', 'painting'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
  },
  budget: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Enquiry', enquirySchema);
