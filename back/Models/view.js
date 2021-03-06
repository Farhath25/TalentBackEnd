const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let viewSchema=new Schema({
    name:{
        type:String,
        require:true        
    },
    role:{
        type:String,
        require:true        
    },
    contactno:{
        type:Number,
        require:true    
    },
    email:{
        type:String,
        require:true
    },
    cname:{
        type:String,
        require:true      
    },
    prevcompany:{
        type:String,
        require:true
    },
    prevsalary:{
        type:Number,
        require:true
    },
    expectsalary:{
        type:Number,
        require:true
    },
    experience:{
        type:Number,
        require:true      
    },
    notice:{
        type:Number,
        require:true
    }
    
})

module.exports=mongoose.model('View',viewSchema)






