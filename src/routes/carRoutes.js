import express from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../controllers/carController.js';
import { upload } from '../middleware/multer.js';

const router = express.Router();

router.post('/', upload.array('images', 10), createCar);
router.get('/', getCars);
router.get('/:id', getCarById);
router.patch('/:id', upload.array('images', 10), updateCar);
router.delete('/:id', deleteCar);

export default router;