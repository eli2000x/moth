const mongoose = require("mongoose");
const User = require("../models/user");
const Project = require("../models/project");
const Comment = require("../models/comment");
const Ticket = require("../models/ticket");

const seedUsers = require("./users")
const seedTickets = require("./tickets")
const seedProjects = require("./projects")
const seedComments = require("./comments")


function seedDb() {
    seedComments();
    seedUsers();
    seedTickets();
    seedProjects();
}



module.exports = seedDb;