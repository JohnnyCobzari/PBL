import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
  res.send('H');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
