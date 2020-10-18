const mongoose = require("mongoose");
const User = require("./models/user");
const Project = require("./models/project");
const Comment = require("./models/comment");
const Ticket = require("./models/ticket");


const comments = [
    {
        author: "Demo PM",
        message: "Please have this fixed asap",
        created: "9/4/2020 6:02 AM",
        kind: "Demo",
        ticket: "Website"
    },
    {
        author: "Demo Developer",
        message: "Just fixed issue",
        created: "9/4/2020 8:21 PM",
        kind: "Demo",
        ticket: "Website"
    },
    {   
        author: "Demo Developer",
        message: "I'm having trouble finding when the bug occurs",
        created: "8/25/2020 11:20 AM",
        kind: "Demo",
        ticket: "Blip"
    },
    {   
        author: "Demo Developer",
        message: "Do we want developers to be able to edit?",
        created: "9/2/2020 10:20 AM",
        kind: "Demo",
        ticket: "Auth"
    },
    {   
        author: "Demo Submitter",
        message: "No, but make it show for all other roles",
        created: "9/3/2020 3:41 PM",
        kind: "Demo",
        ticket: "Auth"
    }
];




function seedComments() {
    Comment.deleteMany({kind: "Demo"}, function(err) {
        if (err) {
            console.log(err.message);
        } else {
            comments.forEach(function(comment) {
                Comment.create(comment, function(err, createdComment) {
                    if (err) {
                        console.log(err.message);
                    } 
                });
            });
        }

    });

};




module.exports = seedComments;
