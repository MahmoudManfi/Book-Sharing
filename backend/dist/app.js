"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("./config/database");
const path = require('path');
const app = (0, express_1.default)();
const User = require('./models/User');
const passport = require('passport');
const LocalStrategy = require("passport-local");
const loginRoute = require('./routes/user.js');
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
mongoose_1.default.connect(database_1.MONGODB_URI)
    .then(() => {
    console.log('Database is connected');
})
    .catch(err => console.error('MongoDB connection error', err.message));
app.use('/', (req, res) => {
    res.sendFile('/home/ahmedadel/Downloads/Book-Sharing/src/index.html');
});
exports.default = app;
//# sourceMappingURL=app.js.map