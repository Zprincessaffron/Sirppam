import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userInput: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isEmail: { type: Boolean, required: true },
});

export default mongoose.model('User', userSchema);
