// routes/contactRoute.js
import express from 'express';
import { handleContactSubmission } from '../controllers/controllerContact.js';

const router = express.Router();

router.post('/contact', handleContactSubmission);

export default router;
