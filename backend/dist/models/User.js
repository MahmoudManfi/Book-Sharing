"use strict";
const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phoneNumber: String,
    address: String
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map