const mongoose=require('mongoose')
const url='mongodb://localhost:27017/employeeData'
mongoose.connect(url,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true     //it's shoew depricate that's why we are using this things.
}).then(()=>
{
    console.log('data base created')
}).catch((err)=>
{
    console.log('something is wrong '+err)
})