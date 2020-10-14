const mongoose = require("mongoose");
const User = require("./models/user");
const Project = require("./models/project");
const Comment = require("./models/comment");
const Ticket = require("./models/ticket");



const users = [
    {
        username: "eli",
        email: "eli@moth.com",
        password: "12",
        role: "Admin",
        kind: "Demo"
    },

    {
        username: "Demo Admin",
        email: "DemoAdmin@moth.com",
        password: "34",
        role: "Admin",
        kind: "Demo"

    },

    {
        username: "Demo Project Manager",
        email: "DemoPM@moth.com",
        password: "56",
        role: "PM",
        kind: "Demo"

    },

    {
        username: "Demo Submitter",
        email: "DemoSubmitter@moth.com",
        password: "78",
        role: "Submitter",
        kind: "Demo"


    }, 

    {
        username: "Demo Developer",
        email: "DemoDev@moth.com",
        password: "910",
        role: "Developer",
        kind: "Demo"

    },

    {
        username: "Natan Franco",
        email: "natan_franco@moth.com",
        password: "1234",
        role: "Developer",
        kind: "Demo"

    },

    {
        username: "Saara Sharpe",
        email: "saara_sharpe@moth.com",
        password: "5678",
        role: "Developer",
        kind: "Demo"

    }


 

];

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


function seedUsers() {
    User.deleteMany({kind: "Demo"}, function(err) {
        User.deleteMany({kind: "N/A"}, function(err) {
            if (err) {
                console.log(err.message);
            } else {
                //console.log("removed demo users");
                users.forEach(function(account) {
                    const newUser = {username: account.username, email: account.email, role: account.role, kind: "Demo"};
                    User.register(newUser, account.password, function(err, createdUser) {
                        if (err) {
                            console.log(err.message);
                        } 
    
                    });
    
    
                });
    
            }



        })

        
    });


};

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



function seedDb() {
    seedComments();
    seedUsers();
    seedTickets();
    seedProjects();
}



module.exports = seedDb;
