const User = require("../models/user")
const Ticket = require("../models/ticket")
const Comment = require("../models/comment")
const Project = require("../models/project")

const addComments = require("./add/comments")
const addTickets = require("./add/tickets")

function add() {
    addComments()
    addTickets()
}

module.exports = add
