const Food=require("../models/foodRecipe");


const addRecipe=async(req,res)=>{
    const food=new Food({
        recipeName:req.body.recipeName,
        ingredient:req.body.ingredient,
        foodImage:req.body.foodImage,
        user:req.params.userId
    })
    await food.save();
    res.status(200).json(food);
}

const deleteRecipe=async(req,res)=>{
    const food=await Food.findById(req.params.foodId);
    await food.remove();
    res.status(200).json({
        message:"Recipe has been successfully removed"
    })
}
const updateRecipe=async(req,res)=>{
    const food=await Food.findById(req.params.foodId);
    if(food){
        food.recipeName=req.body.recipeName;
        food.ingredients=req.body.ingredients;
        food.foodImage=req.body.foodImage;
        food.user=req.params.userId;
        await food.save();
        res.status(200).json(food);
    }else{
        res.status(404).json({
            message:"Recipe not found"
        })
    }
}

const getRecipes=async(req,res)=>{
    const recipes=await Food.find({user:req.params.userId})
    if(recipes){
        res.status(200).json({
            recipes
        })
    }else{
        res.status(404).json({
            message:"User has no recipes"
        })
    }
  

}

module.exports={getRecipes,addRecipe,deleteRecipe,updateRecipe}