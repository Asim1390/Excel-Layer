import express from 'express';
import bodyParser from 'body-parser';
import excelRoutes from './src/routes/excelRoutes.js';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/api/excel', excelRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Excel Formula API');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
