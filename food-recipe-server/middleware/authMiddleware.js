const User=require("../models/user");
const jwt=require("jsonwebtoken");

const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
         token=req.headers.authorization.split(" ")[1];
        const decode= jwt.verify(token,process.env.JWT_SECRET);
        const userId=decode.userId;
        const user=await User.findById(userId);
      
        if(user){
            req.user=user;
            return next();
        }else{
            res.status(400).json({
                message:"Not Authorized"
            })
        }
    }
}
const validUser=async(req,res,next)=>{
    if(req.params.userID===req.user._id){
        return next();
    }
    res.status(404).json({
        message:"Unauthorized User"
    })

}

module.exports={protect,validUser};