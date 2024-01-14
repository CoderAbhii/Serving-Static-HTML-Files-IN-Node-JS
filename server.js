const express = require("express");
const { success } = require("consola");
require("dotenv").config();
const app = express();

app.use(express.static('assets'))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.use((req, res, next) => {
    res.status(404).json({
        error: "Page not found"
    });
});

app.listen(8080, () => success({
    message: `Server started on port ${8080}`,
    badge: true
}));