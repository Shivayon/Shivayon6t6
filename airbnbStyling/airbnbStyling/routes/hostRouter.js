//core module
const path=require('path');

const express=require('express');
const hostRouter=express.Router();
//local module
const rootDir=require("../utils/pathutils");
 
hostRouter.get("/add-home",(req,res,next)=>{
  
  res.render('addhome',{pageTitle:'Add Home to airbnb'});
    
});

const registeredHomes=[];
hostRouter.post("/add-home",(req,res,next)=>{

  console.log('Home regstration successful for:',req.body,req.body.houseName);
  registeredHomes.push( {houseName: req.body.houseName} );  
  consolesole.log(registeredHomes);
  res.render('homeEdit',{pageTitle:'Home Added Successfully'});
});

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;



 