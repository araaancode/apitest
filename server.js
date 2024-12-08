const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("API is running...")
})

app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})