const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Use relative path, not alias like 'backend/...'
const userRoutes = require('./routes/user'); 

app.use(cors());
app.use(express.json());

// ✅ Replace with your actual MongoDB URI
const mongoURI = "mongodb+srv://Rudra_04:HL6sDKO0931FXTqD@cluster1.x9oc0tg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"; 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('MongoDB connection error:', err));

// ✅ Connect user routes
app.use('/api/users', userRoutes); 

app.get('/', (req, res) => {
  res.send('🚀 Backend server is running and connected to MongoDB!');
});

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});