const mongoose = require("mongoose");


const ticketSchema = new mongoose.Schema({
    priority: String,
    type: String,
    created: String,
    title: String,
    status: String,
    details: String,
    author: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    submitter: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }
})


module.exports = mongoose.model("Ticket", ticketSchema);