const User = require("../models/user")
const Ticket = require("../models/ticket")
const Comment = require("../models/comment")
const Project = require("../models/project")

const addComments = require("./seedComments")
const addTickets = require("./seedTickets")

function add() {
    addComments()
    addTickets()
}

module.exports = add
