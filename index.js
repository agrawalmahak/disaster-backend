const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();           // Load .env
connectDB();               // Connect to MongoDB

const app = express();
app.use(express.json());   // Enable JSON body parsing

app.use('/api',require('./routes/reportRoutes'));
// app.get('/', (req, res) => {
//   res.send('🚨 Disaster Response API is live!');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
