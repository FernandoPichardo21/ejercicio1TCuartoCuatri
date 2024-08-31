const rutas=require("express").Router(); //para crear rutas a partir de la funcion de express porque no necesitamos todas las funciones de express

var {mensaje,fecha}=require("./middlewares");


rutas.get("/",mensaje,fecha,(req,res)=>{
    res.send("Hola mundo con express")
    
});





rutas.get("/home",mensaje,fecha,(req,res)=>{

    res.send("Estas en home")
});


module.exports=rutas; //exportar una variable en este caso ruta.