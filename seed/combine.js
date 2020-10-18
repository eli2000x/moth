const mongoose = require("mongoose");
const User = require("./models/user");
const Project = require("./models/project");
const Comment = require("./models/comment");
const Ticket = require("./models/ticket");

const seedUsers = require("./seed/users")
const seedTickets = require("./seed/tickets")
const seedProjects = require("./seed/projects")
const seedComments = require("./seed/comments")


function seedDb() {
    seedComments();
    seedUsers();
    seedTickets();
    seedProjects();
}



module.exports = seedDb;