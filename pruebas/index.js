const express=require("express");
const path=require("path"); 
const rutas=require("./rutas")
const app=express();
app.use("/",express.static(path.join(__dirname,"web")));
app.use("/",rutas); //para jalar o exportar las rutas 



app.listen(3000,()=>{
    console.log("servidor en http://localhost:3000");
    });

