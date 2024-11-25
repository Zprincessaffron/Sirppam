// import Sculpture from '../models/Sculpture.js';
import Sculpture from "../models/Sculpture.js";
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Add a new sculpture
export const addSculpture = async (req, res) => {
  try {
    const { name, description, materialOptions, sizes, category, origin, careInstructions } =
      req.body;

    // Parse the sizes array (since it comes as a JSON string from the frontend)
    const parsedSizes = JSON.parse(sizes);

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "sculptures",
    });

    const sculpture = new Sculpture({
      name,
      description,
      materialOptions: materialOptions.split(",").map((option) => option.trim()), // Handle comma-separated materialOptions
      sizes: parsedSizes, // Save the parsed sizes array
      category,
      origin,
      careInstructions,
      imageUrl: result.secure_url,
    });

    await sculpture.save();

    res.status(201).json({ message: "Sculpture added successfully", sculpture });
  } catch (error) {
    res.status(500).json({ message: "Error adding sculpture", error });
  }
};


// Get all sculptures
export const getAllSculptures = async (req, res) => {
  try {
    const sculptures = await Sculpture.find();
    res.status(200).json(sculptures);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sculptures', error });
  }
};

// Get a sculpture by ID
export const getSculptureById = async (req, res) => {
  try {
    const sculpture = await Sculpture.findById(req.params.id);
    if (!sculpture) {
      return res.status(404).json({ message: 'Sculpture not found' });
    }
    res.status(200).json(sculpture);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sculpture', error });
  }
};

// Delete a sculpture
export const deleteSculpture = async (req, res) => {
  try {
    const sculpture = await Sculpture.findByIdAndDelete(req.params.id);
    if (!sculpture) {
      return res.status(404).json({ message: 'Sculpture not found' });
    }
    res.status(200).json({ message: 'Sculpture deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting sculpture', error });
  }
};
