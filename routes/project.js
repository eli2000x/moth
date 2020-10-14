const express = require("express");
const router = express.Router();
const middleware = require("../middleware")
const User = require("../models/user")
const Ticket = require("../models/ticket")
const Project = require("../models/project")

router.get("/project/new", middleware.isAdmin, (req, res) => {
    res.render("projects/project_new")
})

router.post("/project/new", middleware.isAdmin, (req, res) => {
    const project = req.body.project
    var day = new Date();
    var dayCreated = `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`
    project.author = req.user.username
    project.created = dayCreated

    User.findOne({username: "Demo Developer"}, (err, foundUser) => {
        if (err || !foundUser) {
            req.flash("error", "Error while creating project")
            res.redirect("back")
        } else {
            Project.create(project, (err, createdProject) => {
                if (err || !createdProject) {
                    req.flash("error", "Error while creating project")
                    res.redirect("back")
                } else {
                    foundUser.projects.push(createdProject)
                    foundUser.save()
                }
            })
            assign = function() {
                User.findOne({username: "Demo Developer"}).populate("tickets").populate("projects").exec(function(err, foundUser) {
                    res.render("assign/assignments", {user: foundUser});
            
                })
            }

            setTimeout(assign, 500)
        }
    })

})

router.get("/project/:id/view", middleware.isLoggedIn, (req, res) => {
    Project.findById(req.params.id).exec(function(err, foundProject) {
        if (err || !foundProject) {
            req.flash("error", "Error while retrieving project details")
            res.redirect("back")
        } else {
            Ticket.find({project: foundProject.name}, (err, foundTickets) => {
                if (err || !foundTickets) {
                    req.flash("error", "Error while retrieving project details")
                    res.redirect("back")
                } else {
                    User.find({kind: "Demo"}, (err, foundUsers) => {
                        if (err || !foundUsers) {
                            req.flash("error", "Error while retrieving project details")
                            res.redirect("back")
                        } else {
                            res.render("projects/project_view", {project: foundProject, tickets: foundTickets, users: foundUsers})
                        }
                    })
                    
                    
                }
            })
        }
    })
})

module.exports = router