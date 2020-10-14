const middleware = {}

// check for proper auth
middleware.isAuthorized = (req, res, next) => {
    if (req.isAuthenticated() && req.user) {
        if (req.user.role === "Admin" || req.user.role === "PM") {
            return next()
        } else {
            back = req.header("Referer") || "/home"
            req.flash("error", "You don't have permission to do that")
            res.redirect(back)
        }
    } else {
        req.flash("error", "Please login first")
        res.redirect("/login")
    }
}

middleware.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user) {
        if (req.user.role === "Admin") {
            return next()
        } else {
            back = req.header("Referer") || "/home"
            req.flash("error", "You don't have permission to do that")
            res.redirect(back)
        }
    } else {
        req.flash("error", "Please login first")
        res.redirect("/login")
    }
}

middleware.isNotDev = (req, res, next) => {
    if (req.isAuthenticated() && req.user) {
        if (req.user.role === "Developer") {
            back = req.header("Referer") || "/home"
            req.flash("error", "You don't have permission to do that")
            res.redirect(back)
        } else {
            return next()
        }
    } else {
        req.flash("error", "Please login first")
        res.redirect("/login")
    }
}


middleware.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated() && req.user) {
        return next()
    } else {
        req.flash("error", "Please login first")
        res.redirect("/login")
    }
}



module.exports = middleware