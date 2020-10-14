const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String,
    kind: String,
    
    // project maybe unnecessary
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],

    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket"
        }
    ],


});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);