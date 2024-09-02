const express=require('express');
const app=express();
const mongoose=require('mongoose');
const urlRoute = require('./routes/urlRouter');
const URL=require('./Models/urlSchema');
const staticRoute=require('./routes/staticRouter');


app.listen(3333,'localhost',()=>{
    console.log('server is running on port 3333');
})


const USERNAME="kratika_210";
const PASSWORD="kratika";
const DB_NAME="urlDB";
const dbURI=`mongodb+srv://${USERNAME}:${PASSWORD}@merncourse.7mtst.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=MernCourse`;

mongoose.connect(dbURI)
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})


app.set('view engine','ejs')
app.set('views','views')
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/',staticRoute);
app.use('/url', urlRoute);

app.get('/url/:shortId', async (req,res)=>{
    const shortId=req.params.shortId;
    const entry= await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push:{
                clicks:{
                    timestamp:Date.now()
                }}})
                if (entry) {
                    res.redirect(entry.redirectUrl);
                } else {
                    res.status(404).send('URL not found');
                }
})