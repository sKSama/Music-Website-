//jshint esversion:

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

const userData=require('./models/users')

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("Public"));

mongoose.connect("mongodb+srv://sksama:zxcv@signup.rfmew.mongodb.net/signup",{useNewUrlParser: true, useUnifiedTopology: true})

var uname='Login';



app.post('/register', function(req, res) {
    const newUser = new userData({
        email: req.body.emailr,
        Password: req.body.passr,
        Name: req.body.namer
    });

    newUser.save();
    res.redirect("/");
})



app.post("/login", function(req, res){

  let logemail = req.body.email
  let passwordentered = req.body.pass;
  console.log(passwordentered);


  //find method
userData.find({email: logemail},function(err,users){
  if(err) console.log(err);


  if(users.length === 0){
    res.redirect("/loginfailed");
  }
  else{
  let ogpass= users[0]['Password'];

  if(ogpass===passwordentered)
  {
    console.log("Successful")
    uname=users[0]['Name'];
    res.redirect("/music");
  }
  else
  {
    console.log("UnSuccessful");
    res.redirect("/loginfailed");
  }
}
})

});

app.get("/", function(req, res){
      if(uname==='Login'){
        res.render('home.ejs', {log: uname});
      }
      else {

        res.redirect("/music");
      }

});

app.get("/logout", function(req, res){
      uname='Login';
      res.redirect("/");
});

app.get("/music", function(req, res){
  if(uname==='Login'){
    res.redirect("/");
  }
  else {
    res.render('music.ejs', {log: uname})
  }
});

app.get("/loginfailed", function(req, res){
      res.render('loginfailed.ejs', {log: uname});

});


const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));

//app.listen(3000, function(){
 // console.log("Server started on port 3000.");
//});
