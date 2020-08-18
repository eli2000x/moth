const express = require("express");
const app = express();


const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.redirect("/login");

});

app.get("/login", (req, res) => {
    res.render("login");
});





app.listen(port, () => {
    console.log("Server listening on port " + port);
});