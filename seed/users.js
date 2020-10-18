const mongoose = require("mongoose");
const User = require("../models/user");
const Project = require("../models/project");
const Comment = require("../models/comment");
const Ticket = require("../models/ticket");



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

module.exports = seedUsers