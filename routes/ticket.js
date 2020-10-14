
const express = require("express");
const router = express.Router();
const middleware = require("../middleware")
const User = require("../models/user")
const Ticket = require("../models/ticket")
const Comment = require("../models/comment")



router.get("/ticket/new", middleware.isNotDev, (req, res) => {
    res.render("tickets/ticket_new")
})

router.post("/ticket/new", middleware.isNotDev, (req, res) => {
    const ticket = req.body.ticket
    var d = new Date();
    var time = d.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true})
    var dateCreated = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${time}`
    ticket.created = dateCreated
    ticket.kind = "Demo"

    User.findOne({username: req.body.ticket.developer}, (err, foundDev) => {
        if (err || !foundDev) {
            req.flash("error", "Assigned Developer does not exist")
            res.redirect("back")
        } else {
            Ticket.create(ticket, (err, createdTicket) => {
                if (err) {
                    req.flash("error", err.message)
                    res.redirect("back")
                } else {
                    foundDev.tickets.push(createdTicket);
                    foundDev.save();
                }
                res.redirect("/assignments")
            })
            
        }
    })

})


router.get("/ticket/:id/view", middleware.isLoggedIn, (req, res) => {
    Ticket.findById(req.params.id).populate("comments").exec(function(err, foundTicket) {
        if (err || !foundTicket) {
            req.flash("error", "Could not find Ticket")
            res.redirect("back")
        } else {
            res.render("tickets/ticket_view", {ticket: foundTicket})
        }

    })
})


router.get("/ticket/:id/edit", middleware.isNotDev, (req, res) => {
    Ticket.findById(req.params.id, (err, foundTicket) => {
        if (err || !foundTicket) {
            req.flash("error", "Could not find Ticket")
            res.redirect("back")
        } else {
            res.render("tickets/ticket_edit", {ticket: foundTicket})
        }
    })

})

router.put("/ticket/:id", middleware.isNotDev, (req, res) => {
    Ticket.findByIdAndUpdate(req.params.id, req.body.ticket, (err, updatedTicket) => {
        if (err || !updatedTicket) {
            req.flash("error", "Error while updating Ticket")
            res.redirect("back")
        } else {
            res.redirect("/ticket/" + req.params.id + "/view")
        }
    })
})

router.post("/ticket/:id/comment", middleware.isLoggedIn, (req, res) => {
    const comment = req.body.comment
    var d = new Date();
    var time = d.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true})
    var dateCreated = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${time}`
    comment.created = dateCreated
    comment.author = req.user.username
    comment.kind = "Demo"

    Ticket.findById(req.params.id, (err, foundTicket) => {
        if (err || !foundTicket) {
            req.flash("error", "Could not find Ticket")
            res.redirect("back")
        } else {
            Comment.create(comment, (err, createdComment) => {
                if (err || !createdComment) {
                    req.flash("error", "Error while creating Comment")
                    res.redirect("back")
                } else {
                    foundTicket.comments.push(createdComment);
                    foundTicket.save()
                    res.redirect("/ticket/" + req.params.id + "/view")
                }
            })
        }
    })

})



router.delete("/ticket/:id", middleware.isAuthorized, (req, res) => {
    Ticket.findByIdAndRemove(req.params.id, (err, deletedTicket) => {
        if (err || !deletedTicket) {
            req.flash("error", "Error while deleting Ticket")
            res.redirect("back")
        } else {
            res.redirect("/assignments")
        }
    })
})

module.exports = router