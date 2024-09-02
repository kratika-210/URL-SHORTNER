const express=require('express');
const router=express.Router();
const URL=require('../Models/urlSchema')

router.get('/',async (req,res)=>{
    const allUrls=await URL.find({})
    res.render('home',{urls:allUrls})
})
module.exports=router;