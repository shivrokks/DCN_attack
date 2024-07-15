//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import exp from "constants";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port =3000;
var passwordwritten=false;

app.use(bodyParser.urlencoded({extended:true}));

function passwordcheck(req,res,next){
  const password=req.body["password"];
  if(password==="iloveindia"){
    passwordwritten=true;
  }
  next();
}

app.use(passwordcheck);

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/check",(req,res)=>{
  if(passwordwritten){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.sendFile(__dirname + "/public/index.html")
  }
});

app.listen(port,(req,res)=>{
  console.log(`working at port ${port}`);
});

