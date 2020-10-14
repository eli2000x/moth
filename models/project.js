const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({
    name: String,
    details: String,
    kind: String,
    author: String,
    created: String,
    manager: String,

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        
    ]

})

module.exports = mongoose.model("Project", projectSchema);