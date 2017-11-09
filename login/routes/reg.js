var express = require('express');
var router = express.Router();
var request = require('request');

var reg_db = [
   {username:'123',psaaword:'123'},
   {username:'234',psaaword:'234'},
   {username:'345',psaaword:'345'},

];


router.get('/',function(req, res){
   res.render('reg');
});
router.post('/',function(req, res){
   console.log(req.body);

   var username = req.body.username;

   for(var i = 0; i < reg_db.length; i++){

      if(reg_db[i].username === username){
         res.render('reg',{error:'用户已经存在了，不要注册了！'});
         return;
      }
   }
   res.render('login',{success:'注册成功！'});
});

module.exports = router;
