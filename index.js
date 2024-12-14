import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import router from './src/routes/carRoutes.js';
dotenv.config();

const app = express();

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

app.use('/cars', router);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Car Listing API');
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});