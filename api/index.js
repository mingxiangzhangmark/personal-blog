import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';


dotenv.config();

mongoose.connect(
    process.env.MONGO
).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log('Failed to connect to MongoDB!', err);
});
// deploy
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// deploy
app.use(express.static(path.join(__dirname, '/client/dist')));
// deploy
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ 
        success: false,
        statusCode,
        message
     });
});