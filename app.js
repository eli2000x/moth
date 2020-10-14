const methodOverride = require("method-override"),
      express        = require("express"),
      mongoose       = require("mongoose"),
      flash          = require("connect-flash"),
      passport       = require("passport"),
      LocalStrategy  = require("passport-local"),
      session        = require("express-session"),
      MongoStore     = require("connect-mongo")(session),
      dotenv         = require("dotenv"),
      result         = dotenv.config(),
      User           = require("./models/user"),
      Ticket         = require("./models/ticket"),
      Project        = require("./models/project"),
      Comment        = require("./models/comment"),
      middleware     = require("./middleware/index"),
      app            = express(),
      seedDb         = require("./seed"),
      add            = require("./add")
      
      

const projectRoutes = require("./routes/project"),
      manageRoutes  = require("./routes/manage"),
      indexRoutes   = require("./routes/index"),
      ticketRoutes  = require("./routes/ticket")
      

const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "goodsecret"
const db_url = process.env.DB_URL


mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    //console.log("Connected to Database");
    seedDb();
    setTimeout(add, 3000)
    
}).catch((err) => {
    console.log(err.message);
});
mongoose.set("useFindAndModify", false);


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(session({
    secret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: db_url,
        secret,
        touchAfer: 24 * 60 * 60
    })
}))

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

app.use("/", indexRoutes)
app.use("/", ticketRoutes)
app.use("/", projectRoutes)
app.use("/", manageRoutes)

app.get("*", (req, res) => {
    res.render("default")
})
 

app.listen(port, () => {
    console.log("Server listening on port " + port);
});