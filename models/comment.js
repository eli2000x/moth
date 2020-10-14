const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    message: String,
    created: String,
    kind: String,
    author: String, 
    ticket: String
    
    
});

module.exports = mongoose.model("Comment", commentSchema);