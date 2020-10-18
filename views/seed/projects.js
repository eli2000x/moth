const mongoose = require("mongoose");
const User = require("./models/user");
const Project = require("./models/project");
const Comment = require("./models/comment");
const Ticket = require("./models/ticket");




const projects = [
    {
        name: "Demo Project 1",
        details: "This is the first project",
        kind: "Demo",
        manager: "Demo Project Manager",
        author: "Demo Admin",
        created: "7/6/2019"

    },

    {
        name: "Demo Project 2",
        details: "Project number 2",
        kind: "Demo",
        manager: "Demo Project Manager",
        author: "Demo Admin",
        created: "5/20/2020"

    },

    {
        name: "Bug Tracker",
        details: "Issue tracking application",
        kind: "Demo",
        manager: "Demo Project Manager",
        author: "Demo Admin",
        created: "6/11/2020"

    }
];



function seedProjects() {
    Project.deleteMany({kind: "Demo"}, function(err) {
        if (err) {
            console.log(err.message);
        } else {
            //console.log("removed demo projects");
            projects.forEach(function(project) {
                Project.create(project, function(err, createdProject) {
                    if (err) {
                        console.log(err.message);
                    } 
                });

            });
        }

    });

    
};




module.exports = seedProjects;
