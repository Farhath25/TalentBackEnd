const express=require('express');
const router=express.Router();
const adminController=require('../Controller/opening');


router.post('/jobopening',adminController.postUser);

router.get('/jobopening',adminController.getUser)



module.exports=router;