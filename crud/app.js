var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('china', ['user']);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//var moment = require("moment");
//moment().format('YYYY-MM-DD HH:mm:ss')
app.get('/',function(req, res){
    res.sendfile(__dirname + '/views/index.html');

});




app.get('/list',function(req, res){
    db.user.find().sort({name:-1},function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.post('/list',function(req, res){


    db.user.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/list/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.user.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});






//app.get('/list',function(req, res){
//    db1={
//       name:'caonima',
//        email:'caonima@163.com',
//        number:'123455'
//    };
//    db2={
//        name:'caonima2',
//        email:'caonima2@163.com',
//        number:'123455'
//    };
//    db3={
//        name:'caonima3',
//        email:'caonima3@163.com',
//        number:'123455'
//    };
//    var clist = [db1, db2, db3];
//    res.json(clist);
//});

app.listen(3000);
console.log("ok");