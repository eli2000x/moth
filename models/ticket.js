const mongoose = require("mongoose");


const ticketSchema = new mongoose.Schema({
    priority: String,
    type: String,
    created: String,
    title: String,
    status: String,
    details: String,
    submitter: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    developer: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    /*
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    */
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }

})


module.exports = mongoose.model("Ticket", ticketSchema);