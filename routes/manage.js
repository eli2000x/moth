const express = require("express");
const router = express.Router();
const middleware = require("../middleware")
const User = require("../models/user")


router.get("/manage", middleware.isAuthorized, (req, res) => {
    User.find({kind: "Demo"}, (err, foundUsers) => {
        if (err || !foundUsers) {
            req.flash("error", "Error finding users")
            res.redirect("back")
        } else {
            res.render("assign/manage_users", {users: foundUsers})
        }
    })
})

router.put("/manage/:userid/update", middleware.isAuthorized, (req, res) => {
    User.findByIdAndUpdate(req.params.userid, req.body.user, (err, updatedUser) => {
        if (err || !updatedUser) {
            req.flash("error", "Error updating user role")
            res.redirect("back")
        } else {
            res.redirect("/manage")
        }
    })
})

router.post("/manage/:userid/delete", middleware.isAuthorized, (req, res) => {
    User.findById(req.params.userid, (err, foundUser) => {
        if (err || !foundUser) {
            req.flash("error", "Error while removing user")
            res.redirect("back")
        } else {
            foundUser.kind = "N/A"
            foundUser.save()
            res.redirect("/manage")
        }
    })
  
})

router.post("/manage/add", middleware.isAuthorized, (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err || !foundUser) {
            req.flash("error", "Cannot find user with that name")
            res.redirect("/manage")
        } else if (foundUser.kind === "Demo") {
            req.flash("error", "User is already added")
            res.redirect("/manage")
        } else {
            foundUser.kind = "Demo"
            foundUser.role = req.body.role
            res.redirect("/manage")
        }
        
    })
    
})

module.exports = router