const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    message: String,
    created: String,
    author: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },

    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    }
    
});

module.exports = mongoose.model("Comment", commentSchema);