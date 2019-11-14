const opening=require('../Models/opening');

exports.postUser=(req,res,next)=>{
     new opening({
        title:req.body.title,
        name:req.body.name,
        contactname:req.body.contactname,
        city:req.body.city,
        jobtype:req.body.jobtype,
        salary:req.body.salary,
        
    }).save().then(data =>{
       return res.json(data);
    }).catch(err => {
        console.log(err);
    
    })
    
}


exports.getUser=(req,res,next)=>{
    opening.find().then(data=>{
      res.json(data);
    }).catch(err=>{
        console.log(err);
    })
}
