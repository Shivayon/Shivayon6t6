//core module
const path=require('path');
//external module
const express=require('express');
//local module
const userRouter=require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter');
const rootDir=require("./utils/pathutils");


const app=express();

app.set('view engine','ejs');
app.set('views','views');



app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
  res.status(404).render('404pagenotfound',{pageTitle:'Page Not Found'});
})





const PORT=3008;
app.listen(PORT,()=>{
  console.log(`server running on adress http://localhost:${PORT}`);
});