//core module
const path=require('path');
//external module
const express=require('express');
//local module
const userRouter=require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter');
const rootDir=require("./utils/pathutils");


const ap=express();

ap.set('view engine','ejs');
ap.set('views','views');



ap.use(express.urlencoded());
ap.use(userRouter);
ap.use("/host",hostRouter);
ap.use(express.static(path.join(rootDir,'public')));

ap.use((req,res,next)=>{
  res.status(404).render('404pagenotfound',{pageTitle:'Page Not Found'});
})





const PORT=3008;
ap.listen(PORT,()=>{
  console.log(`server running on adress http://localhost:${PORT}`);
});