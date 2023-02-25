const router = require("express").Router();
const Doubt = require("../models/Doubt");
const User=require("../models/User");

router.post("/",async (req,res)=>{
    console.log("somebody  called me and i am doubt");
    console.log(req.body)
    const newDoubt=new Doubt({
        title:req.body.title,
        desc:req.body.desc,
        image:req.body.image,
        creator:req.body.username
    });
    try{
        const savedDoubt=await newDoubt.save();
        res.status(200).json(savedDoubt);
    }catch(err){
        console.log("something bad happened my friend so go and improve it")
    }
});
// get a selected doubt
router.get("/:id",async(req,res)=>{
    try{
       const doubt=await Doubt.findById(req.param.id);
       res.status(200).json(doubt);
    }catch(err){
       res.status(500).json(err);
    }
})

//get all doubt of the selected student
router.get("/mydoubt/:_id",async(req,res)=>{
    try{
        const user=await User.findById(req.params._id);
        const doubts=await Doubt.find({username:user.username});
        res.status(200).json(doubts);

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/",async(req,res)=>{
    try{
      const doubts=await Doubt.find();
      res.status(200).json(doubts);
    }catch(err){
        //code
        res.status(500).json(err);
    }
})

module.exports = router;