import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI } from './config/database';
import reader from './routes/reader';
import book from './routes/book';
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/reader', reader);
app.use('/book', book);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => console.error('MongoDB connection error', err.message));

export default app;
