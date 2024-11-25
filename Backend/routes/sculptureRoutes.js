import express from 'express';
import multer from 'multer';
import {
  addSculpture,
  getAllSculptures,
  getSculptureById,
  deleteSculpture,
} from '../controllers/sculptureController.js';

const router = express.Router();

// Multer configuration for image upload
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Routes for sculpture
router.post('/', upload.single('image'), addSculpture);
router.get('/', getAllSculptures);
router.get('/:id', getSculptureById);
router.delete('/:id', deleteSculpture);

export default router;
