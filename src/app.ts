import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI } from './config/database';
import reader from './routes/reader';
import book from './routes/book';

const app = express();

app.use('/reader', reader);
app.use('/book', book);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => console.error('MongoDB connection error', err.message));

export default app;
