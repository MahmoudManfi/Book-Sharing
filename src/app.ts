import express from 'express';
import mongoose from 'mongoose';

const app = express();

console.log(process.env.MONGO_URI);



mongoose.connect('mongodb+srv://Manfy:Manfy1234444@cluster0.le5p5.mongodb.net/Book-Share?retryWrites=true&w=majority')
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => console.error('MongoDB connection error', err.message));

export default app;
