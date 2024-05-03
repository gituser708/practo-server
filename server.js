const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const labTestRoutes = require('./routes/labtestRoutes');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI ='mongodb+srv://somud6711:Qv5mtWMJMN9NY1eI@somucluster.pcztszd.mongodb.net/Mentorship-Practo?retryWrites=true&w=majority';


app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/api', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/labtests', labTestRoutes);




app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

