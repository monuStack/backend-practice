const express = require("express");
const app = express();
const port = 8000;

const session = require("express-session");
const flash = require("connect-flash");
const ejs = require('ejs');
const ejsMate = require("ejs-mate"); // this is for process ejs file


app.set('view engine', 'ejs');
app.engine("ejs", ejsMate); // this is for process ejs file

const sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { // this is for session id cookies  exist in browser for 7 days
    expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash())


app.get("/", (req, res) => {
  res.send("i m root");
});

//Register user
app.get("/", (req, res) => {
    req.flash('suceess','user register successfully')
  res.send("i m root");
});


app.listen(port, () => {
  console.log(`i m listening on ${port}`);
});
