const methodOverride = require("method-override"),
      express        = require("express"),
      mongoose       = require("mongoose"),
      flash          = require("connect-flash"),
      passport       = require("passport"),
      LocalStrategy  = require("passport-local"),
      User           = require("./models/user"),
      app            = express(),
      seedDb         = require("./seed")




seedDb();
const port = process.env.PORT || 3000;

const db = "demo"
const url = `mongodb+srv://eli:${process.env.PW}@cluster0.am3un.mongodb.net/${db}?retryWrites=true&w=majority`
const db_url = url || "mongodb://localhost/db"


mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log(err.message);
});
mongoose.set("useFindAndModify", false);

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(require("express-session")({
    secret: "Mochi is nicest cat",
    resave: false,
    saveUninitialized: false

}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});


app.get("/", (req, res) => {
    res.redirect("/login");

});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true
}), (req, res) => {
    
});


app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");

})

app.get("/register", (req, res) => {
    res.render("register");
});


app.post("/register", (req, res) => {
    const newUser = new User({username: req.body.username, email: req.body.email});
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err.message);
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/home");
            });
        }
    });
});

app.get("/demo", (req, res) => {
    res.render("demo/demo");
});



app.get("/home", (req, res) => {
    res.render("home");
});









app.listen(port, () => {
    console.log("Server listening on port " + port);
});