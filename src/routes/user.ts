const express = require('express');
const Router = express.Router();
const passport = require('passport');
const UserSchema = require("../models/User");
const User = require('../classes/User');

Router.get('/login', (req:any, res:any)=>{
       
});

Router.post('/login',passport.authenticate('local',
{
    successRedirect:'/home',
    failureRedirect: 'login'
}), function(req:any,res:any){
});

Router.get('/logout', (req:any,res:any)=>{
    req.logout();
    req.redirect('/');
});

Router.get('/register', (req:any,res:any)=>{
    res.render();
});

Router.post('/register', (req:any,res:any)=>{
    //let user = new User(req.body.username, req.body.email, req.body.password, req.body.phoneNumber, res.body.address);
    var newUser = new UserSchema({name: req.body.username,
        password: req.body.password,  
        email: req.body.email,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address});
    UserSchema.register(newUser, req.body.password, (err:any, user:any)=>{
        if(err){
            console.log('Error during registeration ')
            return res.render('/')
        }
        passport.authenticate("local")(req, res,()=>{
            console.log(user.username+ ' has been registered!');
            res.redirect('/home')
        });
    });
});
