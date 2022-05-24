import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI } from './config/database';

const app = express();

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => console.error('MongoDB connection error', err.message));

export default app;
