//require('dotenv').config()
const express=require('express')
const app=express()

app.get('/',(req,res)=>
{
    res.send("this is get methos")
})
app.post('/employee',(req,res)=>
{
    res.send('this is respond method')
})
app.listen(process.env.PORT,()=>
{
    console.log("HEY")
})