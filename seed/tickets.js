const mongoose = require("mongoose");
const User = require("../models/user");
const Project = require("../models/project");
const Comment = require("../models/comment");
const Ticket = require("../models/ticket");


const tickets = [
    {
        priority: "Critical",
        type: "Task",
        created: "9/4/2020 7:15 AM",
        title: "Website unresponsive",
        status: "Resolved",
        details: "Site becomes very slow when active users reach a certain number",
        kind: "Demo",
        developer: "Demo Developer",
        submitter: "Demo Submitter",
        project: "Demo Project 2"

    },
    {
        priority: "High",
        type: "Bug",
        created: "8/22/2020 5:06 AM",
        title: "Problem with UI",
        status: "New",
        details: "Interface is distorted on mobile devices",
        kind: "Demo",
        developer: "Natan Franco",
        submitter: "Demo Submitter",
        project: "Demo Project 1"

    },
    {
        priority: "Low",
        type: "Bug",
        created: "8/24/2020 10:23 PM",
        title: "Blip on homepage",
        status: "In Progress",
        details: "A small black box in the corner of the homepage",
        kind: "Demo",
        developer: "Demo Developer",
        submitter: "Demo Submitter",
        project: "Demo Project 1"
    },
    {
        priority: "Medium",
        type: "Feature",
        created: "8/25/2020 8:52 AM",
        title: "Color on front page",
        status: "Need More Info",
        details: "Add appropriate coloring the front page",
        kind: "Demo",
        developer: "Saara Sharpe",
        submitter: "Demo Submitter",
        project: "Demo Project 2"

    },
    {
        priority: "Medium",
        type: "Improvement",
        created: "8/21/2020 11:23 PM",
        title: "Add more user options",
        status: "New",
        details: "Add more customization in profile",
        kind: "Demo",
        developer: "Demo Developer",
        submitter: "Demo Submitter",
        project: "Demo Project 2"

    },
    {
        priority: "Medium",
        type: "Bug",
        created: "8/22/2020 10:11 AM",
        title: "Data not updating properly",
        status: "Open",
        details: "After making an edit, change is not always reflected",
        kind: "Demo",
        developer: "Demo Developer",
        submitter: "Demo Submitter",
        project: "Bug Tracker"

    },
    {
        priority: "High",
        type: "Improvement",
        created: "9/1/2020 5:31 PM",
        title: "Auth properties",
        status: "In Progress",
        details: "Change authorization so anybody can edit a ticket",
        kind: "Demo",
        developer: "Demo Developer",
        submitter: "Demo Submitter",
        project: "Bug Tracker"

    }
];



function seedTickets () {
    Ticket.deleteMany({kind: "Demo"}, function(err) {
        if (err) {
            console.log(err.message);
        } else {
            tickets.forEach((ticket) => {
                Ticket.create(ticket, function(err, createdTicket) {
                    if (err) {
                        console.log(err.message);
                    } 
                });
            });
        }
    
    });


};



module.exports = seedTickets;
