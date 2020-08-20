const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({
    name: String,
    details: String,
    manager: {
        username: String,

        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket"
        }
    ]
})

module.exports = mongoose.model("Project", projectSchema);