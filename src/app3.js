//require('dotenv').config()
const express=require('express')
require('./db/conn')
require('./db/adminCon')
//const Employee =require("./models/employees")
const Employee =require("./models/employees")
const Admin =require("./models/admin")


const app=express()
PORT=process.env.PORT ||3000
app.use(express.json());

app.get('/',(req,res)=>
{
    res.send("this is get methos")
})

// using promise

// app.post('/employee',(req,res)=>
// {
//     console.log(req.body)
   
//     const user=new Employee(req.body)
//     user.save().then(()=>
//     {
//         res.status(201).send(user)
//     }).catch((e)=>
//     {
//         res.status(400).send(e)
//     })
    
// })


//using async await.

app.post('/employee', async(req,res)=>
{
    try{
    const user=new Employee(req.body)
     const userData=await user.save();
     res.status(201).send(userData)
    }
    catch(e)
    {
        res.status(400).send(e)
    }



})

// to access all the data.

// app.get('/employee', async(req,res)=>
// {
//     try{
//      const employeeRead=await Employee.find()
//      res.status(200).send(employeeRead)
//     }
//     catch(e)
//     {
//         res.status(400).send(e)
//     }
// })


// get the indivisual data of employee

app.get('/employee/:id', async(req,res)=>
{
    try{
     const _id=req.params.id
      const employeeS=await Employee.find({_id:_id})
      res.status(400).send(employeeS)
      

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})
app.patch('/employee/:id', async(req,res)=>
{
     try{
         const _id=req.params.id;
          const data=await Employee.findByIdAndUpdate(_id,req.body)
          res.send(data)
     }
     catch(e)
     {
         res.send(e)
     }


})

app.delete('/employee',async (req,res)=>
{
    try
    {
        const _id=req.params.id;
      const deleteData= await Employee.findByIdAndDelete(_id) 
      if(!req.params._id) 
      {
          return  
      }
    }
    catch(e)
    {
        res.send(e)
    }

})


app.use (morgan( 'dev'))


       employee.aggregate([
        {
          $lookup: {
            from: "admin",
            localField: "employeeID",
            foreignField: "adminID",
            as: "designation",
          },
        },
        // Deconstructs the array field from the
        // input document to output a document
        // for each element
        {
          $unwind: "$designation",
        },
      ])
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      
      



app.listen(PORT,()=>
{
    console.log(` ${PORT} is connecting`)
})