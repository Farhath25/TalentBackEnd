const express = require('express');
const router = express.Router();

const interviewCOntroller = require('../Controller/interview');

router.post('/addInterview' , interviewCOntroller.addInterview);
router.get('/getInterview' , interviewCOntroller.getInterview);


module.exports = router;