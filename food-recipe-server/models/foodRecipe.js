const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const foodSchema=new Schema({
    recipeName:{
        type:String,
        required:true
    },
    ingredient:{
        type:Array,
        of:String
    },
    foodImage:{
        type:String,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})
const Recipe=mongoose.model("Food",foodSchema);
module.exports=Recipe;