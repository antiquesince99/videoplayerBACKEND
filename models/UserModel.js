const mongoose = require("../connection");

const schema = new mongoose.Schema({
    email: String,
    fullname: String,
    password: String,
    username: String,
    created: Date,
})

const model = mongoose.model('users' , schema);

module.exports = model;