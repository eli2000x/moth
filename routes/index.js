const express = require("express");
const router = express.Router();
const passport = require("passport")
const middleware = require("../middleware")
const User = require("../models/user")
const seedDb = require("../seed/combine")
const add = require("../add/combine")

router.get("/", (req, res) => {
    res.redirect("/login");

});

router.get("/add", (req, res) => {
    seedDb()
    setTimeout(add, 3000)
    res.redirect("back")
})

router.get("/home", middleware.isLoggedIn, (req, res) => {
    if (req.user.kind === "Demo" || req.user.kind === "N/A") {
        User.findOne({username: "Demo Developer"}).populate("tickets").exec(function(err, foundUser) {
            res.render("home", {user: foundUser});
        })
    } else {
        User.findOne({username: req.user.username}, (err, foundUser) => {
            res.render("home", {user: foundUser})
        })
    }
    
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true
}))


router.get("/logout", (req, res) => {
    seedDb();
    setTimeout(add, 3000)
    req.logout();
    res.redirect("/login");
})

router.get("/register", (req, res) => {
    res.render("register");
});


router.post("/register", (req, res) => {
    const newUser = new User({username: req.body.username, email: req.body.email, role: "Developer"});
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            req.flash("error", err.message);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/home");
            });
        }
    });
});

router.get("/demo", (req, res) => {
    res.render("demo/demo");
});

router.get("/assignments", middleware.isLoggedIn, (req, res) => {

    if (req.user.kind === "Demo" || req.user.kind == "N/A") {
        User.findOne({username: "Demo Developer"}).populate("tickets").populate("projects").exec(function(err, foundUser) {
            res.render("assign/assignments", {user: foundUser});
    
        })
    } else {
        User.findOne({username: req.user.username}).populate("tickets").populate("projects").exec(function(err, foundUser) {
            res.render("assign/assignments", {user: foundUser});
    
        })
    }
    
});

module.exports = router;