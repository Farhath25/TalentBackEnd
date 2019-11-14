const Interview = require('../Models/interview');

exports.addInterview = (req, res, next) => {
    let interviewname = req.body.interviewname;
    let name = req.body.name;
    let email = req.body.email;
    let contactno = req.body.contactno;
    let opening = req.body.opening;
    let closing = req.body.closing;
    let clientname = req.body.clientname;
    let salary = req.body.salary;
    let skills = req.body.skills;
    let location = req.body.location;

    let interview = new Interview({
        interviewname:interviewname,
        name : name,
        email : email,
        contactno : contactno,
        opening : opening,
        closing : closing ,
        clientname : clientname ,
        salary : salary,
        skills : skills,
        location : location
    })
    interview.save().then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}


exports.getInterview = (req, res, next) => {
    Interview.find().then( result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })  
}