import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI } from './config/database';
const path = require('path')
const app = express();
const User = require('./models/User');
const passport = require('passport');
const LocalStrategy = require("passport-local");
const loginRoute = require('./routes/user.js')
// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "dflgjdjggmxewrkewreoipogifdbvbretretrgfvbvbcv;;ldfs;lfs,dfk",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => console.error('MongoDB connection error', err.message));

app.use('/',(req,res) =>{
   res.sendFile('/home/ahmedadel/Downloads/Book-Sharing/src/index.html');
})  

export default app;
