const User = require("../models/user")
const Ticket = require("../models/ticket")
const Comment = require("../models/comment")
const Project = require("../models/project")


function addTickets() {
    Ticket.find({kind: "Demo"}, function(err, foundTickets) {
        Project.find({kind: "Demo"}, function(err, foundProjects) {
            User.findOne({username: "Demo Developer"}, function(err, demo_dev) {
                foundTickets.forEach(function(ticket) {
                    demo_dev.tickets.push(ticket);
                })
                foundProjects.forEach(function(project) {
                    demo_dev.projects.push(project);
                })
                demo_dev.save();
                
            })
        }) 
        

    })



}

module.exports = addTickets
