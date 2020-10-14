const mongoose = require("mongoose");


const ticketSchema = new mongoose.Schema({
    priority: String,
    type: String,
    created: String,
    title: String,
    status: String,
    details: String,
    kind: String,
    developer: String,
    project: String,
    submitter: String,
   
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
        }
    ]

})


module.exports = mongoose.model("Ticket", ticketSchema);