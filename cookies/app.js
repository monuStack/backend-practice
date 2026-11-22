const express = require("express");
const app = express();
const port = 8000;
const cookieparse  = require('cookie-parser')

app.use(cookieparse('secretCode')) // here we type secretCode string for the signed Cookies , we can empty this field for unsigned cookie

//send  unsigned cookies

app.get('/cookies',(req,res)=>{
  res.cookie("name",'monu')
  res.send('cookies generated');
})

// get cookies , we need cookie-parser middleware  it convert cookie string into js readble obect
app.get('/getcookie',(req,res)=>{
  console.log(req.cookies)
  res.send('cookies revice');
})

//send Signed-Cookie , we need  send extra object signed true  and  also defined a secretCode into cookie parser
app.get('/signcookies',(req,res)=>{
  res.cookie("name",'monu' ,{signed:true})
  res.send('cookies generated');
})


//get Signed-Cookie 
app.get('/getsigncookies',(req,res)=>{
    console.log(req.signedCookies)
  res.send('cookies revice');
})

app.get("/", (req, res) => {
  res.send("Hello i m root");
});

app.listen(port, () => {
  console.log("server runing on 8000");
});

