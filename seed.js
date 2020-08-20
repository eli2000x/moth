const mongoose = require("mongoose");
const User = require("./models/user");
const Project = require("./models/project");
const Comment = require("./models/comment");
const Ticket = require("./models/ticket");


const users = [
    {
        username: "eli",
        email: " ",
        password: "12",
        role: "Developer",
        kind: "Demo"
    },

    {
        username: "Demo Admin",
        email: " ",
        password: "34",
        role: "Administrator",
        kind: "Demo"

    },

    {
        username: "Demo Project Manager",
        email: " ",
        password: "56",
        role: "Project Manager",
        kind: "Demo"

    },

    {
        username: "Demo Submitter",
        email: " ",
        password: "78",
        role: "Submitter",
        kind: "Demo"


    }, 

    {
        username: "Demo Developer",
        email: " ",
        password: "910",
        role: "Developer",
        kind: "Demo"

    }

];

const projects = [
    {
        name: "Demo Project 1",
        details: "Demo project for demoing projects",
        kind: "Demo"

    },

    {
        name: "Hog",
        details: "Game for practicing oop nad hof",
        kind: "Demo"

    },

    {
        name: "Ants",
        details: "Game for practicing recursion",
        kind: "Demo"

    }
];

const tickets = [
    {
        priority: "High",
        type: "Bug",
        created: "10 am Tuesday",
        title: "Problem with UI",
        status: "Not done",
        details: "There is an error where it still shows a user is logged in after exiting",
        kind: "Demo"

    },
    {
        priority: "Low",
        type: "Minor Fix",
        created: "8 am Monday",
        title: "Blip on homepage",
        status: "In Progress",
        details: "A small black box in the corner of the homepage",
        kind: "Demo"
    },
    {
        priority: "Critical",
        type: "Crash",
        created: "9 pm Thursay",
        title: "Product crashes in situations",
        status: "In Progress",
        details: "Server fails when users try to enter an invalid url",
        kind: "Demo"

    },
    {
        priority: "Medium",
        type: "Update",
        created: "5 pm Thursay",
        title: "Color on front page",
        status: "Not done",
        details: "Add appropriate coloring the front page",
        kind: "Demo"

    },
    {
        priority: "Medium",
        type: "Update",
        created: "10 hours ago",
        title: "Talk with marketing",
        status: "Not started",
        details: "Go over logistics with marketing team",
        kind: "Demo"

    },
    {
        priority: "Medium",
        type: "Bug",
        created: "10 am Wednesday",
        title: "User data not updating",
        status: "In progress",
        details: "After making a purchase, user data is not getting updated",
        kind: "Demo",

    },
    {
        priority: "High",
        type: "Fix",
        created: "5 mins ago",
        title: "Page not loading",
        status: "Not started",
        details: "Page takes too long to load and sometimes gets stuck",
        kind: "Demo"

    }
];

const comments = [
    {
        message: "Just finished updating site",
        created: "2 hours ago",
        kind: "Demo"
    },
    {
        message: "Handled bug on home page",
        created: "4 days ago",
        kind: "Demo"
    },
    {   
        message: "Fixed problem with coloring",
        created: "4 weeks ago",
        kind: "Demo"
    }
];


const seedUsers = () => {
    User.deleteMany({kind: "Demo"}, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("removed demo users");
            users.forEach((account) => {
                const newUser = {username: account.username, email: account.email, role: account.role};
                User.register(newUser, account.password, (err, createdUser) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log("added a user");
                    }

                });


            });

        }


    });
};

const seedProject = () => {
    Project.deleteMany({kind: "Demo"}, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("removed demo projects");
            projects.forEach((project) => {
                Project.create(project, (err, createdProject) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log("added a project");
                    }
                });

            });
        }

    });
};

const seedTickets = () => {
    Ticket.deleteMany({kind: "Demo"}, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("removed demo tickets");
            tickets.forEach((ticket) => {
                Ticket.create(ticket, (err, createdTicket) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log("added a ticket");
                    }
                });
            });
        }
    });
};


const seedComments = () => {
    Comment.deleteMany({kind: "Demo"}, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("removed demo comments");
            comments.forEach((comment) => {
                Comment.create(comment, (err, createdComment) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log("added a comment");
                    }
                });
            });
        }
    });
};

const seedDb = () => {
    seedProject();
    seedTickets();
    seedUsers();
    seedComments();
};


module.exports = seedDb;