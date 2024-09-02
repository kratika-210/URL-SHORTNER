const mongoose=require('mongoose');
const urlSchema= new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String
    },
    clicks : [{ timestamp : { type: Number } }]
    
},{timestamps:true})

const URL=mongoose.model('url',urlSchema,'urls');

module.exports=URL;