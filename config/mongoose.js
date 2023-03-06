const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost/todo-list-db");

const db=mongoose.connection;


db.on("error",console.error.bind(console,"Here error occured in the db"));

db.once("open",()=>{
    console.log("Connection is open!!");
})