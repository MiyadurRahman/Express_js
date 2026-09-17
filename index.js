const express=require("express");
const app=express();
const port= 3000


app.get('/',(req,respone)=>{
    respone.send("hi miyad");

});
app.listen(port);