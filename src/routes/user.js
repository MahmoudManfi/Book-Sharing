const express = require('express');
const Router = express.Router();
const passport = require('passport');
const user = require("../models/User");


Router.get('/login',(req,res)=>{
       
});

Router.post('login',passport.authenticate('local',
{
  



}
))





