const mongoose=require('mongoose')
const validator=require('validator')

const adminScema=new mongoose.Schema(
    {
        name:
        {
            type: String,
            required:true,
            minlength:5,
        },

        jobType:
        {
            type: String,
            required:true   
        },



        email:
        {
            type:String,
            required:true,
            unique:[true,'email already registered'],
            validate(value)
            {
                if(!validator.isEmail(value))
                {
                     throw new Error('invalid email')
                }   
            } 

        },
        phone:{
            type:Number,
            minlength:10,
            maxlength:10,
            required:true,
            unique:true
        },
        address:
        {
            type:String,
            required:true
        }

    }
)

// creating a new collection.  hear Student is model
//Employee should be capitall.
// collection Student should be capital and singular form.

const Admin=new mongoose.model('Admin',adminScema)
module.exports=Admin;