import Enquiry from '../models/Enquiry.js';

// Create a new enquiry
export const createEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const savedEnquiry = await enquiry.save();
    res.status(201).json({
      message: 'Enquiry submitted successfully',
      enquiry: savedEnquiry,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to submit enquiry',
      error: error.message,
    });
  }
};
