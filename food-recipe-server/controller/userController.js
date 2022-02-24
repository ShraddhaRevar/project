const generateToken=require("../utils/generateTokens")
const User=require("../models/user");
const userLogin=async(req,res)=>{
    const {email,username,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        if(!(await user.matchPassword(password))){
            res.status(500)
            res.json({
                message:"Password is incorrect"
            })
        }else if(user&&await(user.matchPassword(password))){
            res.json({
                username,
                id:user._id,
                token:generateToken(user._id)
            })
        }
    }else{
        res.status(401)
        res.json({
            message:"User does not exists"
        })
    } 
}

 const userRegister=async(req,res)=>{
     const {username,password,email}=req.body;
     const userExists=await User.findOne({email});
     if(userExists){
         res.json({
             message:"User Already Exists"
         })
     }else{
        const user=new User({
            username,
            password,
            email
        })
        await user.save();
        if(user){
            res.status(201);
            res.json({
                username:user.username,
                id:user._id,
                email:user.email,
                token:generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error("Invalid user data");
        }
     }
    
   
}
const userProfile=(req,res,next)=>{
    res.status(200).json({
        message:"Welcome to the user Profile page",
        username:req.body.username,
        email:req.body.email
    })
}

const updateProfile=async(req,res)=>{
    const user=await User.findById(req.params.userId);
    if(user){
        user.username=req.body.username;
        user.email=req.body.email;
        user.password=req.body.password;
        await user.save();
        res.status(200).json(user);
    }else{
        res.status(400).json({
            message:"User not found"
        })
    }

}
module.exports={userLogin,userRegister,userProfile,updateProfile}; 