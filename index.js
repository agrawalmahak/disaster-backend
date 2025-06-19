const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();           // Load .env
connectDB();               // Connect to MongoDB


app.use(express.json());   // Enable JSON body parsing

// ✅ Add root route BEFORE listen
app.get('/', (req, res) => {
  res.send('🚨 Disaster Response Platform API is live!');
});

// API routes
app.use('/api', require('./routes/reportRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
