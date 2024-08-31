const express=require("express");
const app = express();


function fecha(req, res,next) {
  let now = new Date();
  console.log("fecha: "+  now);
  next();
};


function mensaje(req,res,next){
  
  console.log("Hola profe :)");

next();
};



module.exports={
fecha,
mensaje
};


