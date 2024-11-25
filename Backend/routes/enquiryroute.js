import express from 'express';
import { createEnquiry } from '../controllers/enquiryController.js';

const router = express.Router();

// POST /api/enquiries - Submit a new enquiry
router.post('/enquiries', createEnquiry);

export default router;