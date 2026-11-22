const express = require("express");
const app = express();
const port = 8000;

//first we need to install "expres-session" library , its is  also middleware
const session = require("express-session");

const sessionOption = {
  secret: "supersecretstring",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOption)); // in the session we need to gave options is compalsory like "secret"




// registering the user
app.get('/register',(req,res)=>{
    let{name = 'anonymous'} = req.query;
    req.session.name = name // here we create name varibale in session object
    res.redirect('/hello');
})

//  registed user  = hello + name
app.get('/hello',(req,res)=>{
    res.send(`Hello ${req.session.name}`);

})


app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++ // if "count" variable exist in session object then incress the count
    }else{
         req.session.count = 1 // create "count" variable in the session
    }
  res.send(`you r send req count ${ req.session.count} time`);
});

app.get("/", (req, res) => {
  res.send("i am root route");
});

app.listen(port, () => {
  console.log("sever is listen on 8000");
});
