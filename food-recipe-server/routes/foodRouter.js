const express=require("express");
const router=express.Router();
const {getRecipes,addRecipe,deleteRecipe,updateRecipe}=require("../controller/foodController");
const {protect,validUser}=require("../middleware/authMiddleware");

router.get("/:userId",protect,getRecipes);


router.post("/:userId",protect,validUser,addRecipe);


router.get("/:userId/:foodId",protect,deleteRecipe);
router.post("/:userId/:foodId",protect,validUser,updateRecipe);

module.exports=router;