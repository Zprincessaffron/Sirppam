import mongoose from 'mongoose';

// Define the schema for a sculpture
const sculptureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  materialOptions: [String],
  sizes: [
    {
      size: { type: String, required: true },
      dimensions: {
        height: { type: String, required: true },
        width: { type: String, required: true },
        depth: { type: String, required: true },
      },
      weight: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  category: { type: String, required: true },
  origin: { type: String, required: true },
  careInstructions: { type: String },
  imageUrl: { type: String, required: true },
});


// Create a model for the sculpture collection
const Sculpture = mongoose.model('Sculpture', sculptureSchema);

export default Sculpture;