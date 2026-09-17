const express=require("express");
const phones=require('./phones.json')
const app=express();
const port= 3000

app.get('/phones',(req,res)=>{

    res.send(phones);
})
app.get('/phones/:id',(req,res)=>
{
const id=parseInt(req.params.id);
const phone=phones.find(phone=>phone.id===id)|| {};
console.log(phone);//show data in console
res.send(phone)//show data in the specipic path in browser



})
app.get('/',(req,respone)=>{
    respone.send("hi miyad,how are you");

});
app.listen(port);