const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt=require("bcryptjs");
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
userSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
}
userSchema.pre("save",async function(next){
    const saltRounds=10;
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(saltRounds);
    this.password=await bcrypt.hash(this.password,salt);
})


const User=mongoose.model("User",userSchema);

module.exports=User;