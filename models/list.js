const mongoose= require("mongoose");

var list_Schema= new mongoose.Schema(
    {
        list:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
           }
    }
)

const List= mongoose.model("List",list_Schema);

module.exports=List;