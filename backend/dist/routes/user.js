"use strict";
const express = require('express');
const Router = express.Router();
const passport = require('passport');
Router.get('/login', (req, res) => {
});
Router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: 'login'
}), function (req, res) {
});
Router.get('/logout', (req, res) => {
    req.logout();
    req.redirect('/');
});
Router.get('/register', (req, res) => {
    res.render();
});
Router.post('/register', (req, res) => {
    var newUser = new UserSchema({ name: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address });
    UserSchema.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log('Error during registeration ');
            return res.render('/');
        }
        passport.authenticate("local")(req, res, () => {
            console.log(user.username + ' has been registered!');
            res.redirect('/home');
        });
    });
});
//# sourceMappingURL=user.js.map