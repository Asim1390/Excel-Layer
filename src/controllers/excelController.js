import { executeFormula } from '../services/excelService.js';

/**
 * Process the Excel formula by sending it to an Excel file for calculation
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const processExcelFormula = async (req, res) => {
  const { formula } = req.body;

  if (!formula) {
    return res.status(400).json({ error: 'Formula is required' });
  }

  try {
    const result = await executeFormula(formula);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
