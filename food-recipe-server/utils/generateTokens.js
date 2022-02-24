const jwt =require("jsonwebtoken");

const generateToken=(id)=>{
    console.log("User id: "+id);
    return jwt.sign({userId:id},process.env.JWT_SECRET,{
        expiresIn:'1d'
    })
}
module.exports=generateToken;