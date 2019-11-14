const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let userSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    contactname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
    
})

module.exports=mongoose.model('Opening',userSchema);