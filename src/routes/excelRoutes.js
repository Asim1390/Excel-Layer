import express from 'express';
import { processExcelFormula } from '../controllers/excelController.js';

const router = express.Router();

/**
 * POST /api/excel/formula
 * Route to take an Excel formula, process it in an Excel file, and return the result
 */
router.post('/formula', processExcelFormula);

export default router;
