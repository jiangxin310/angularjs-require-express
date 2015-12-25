var express = require('express');
var router = express.Router();

var User = require("../database/user").User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/updateAva', function(req, res, next) {
    var avatar = req.body.avatar;
    console.log(avatar);
    var name = req.session.user.name;
console.log(name);
    User.findByName(name, function(err, result) {
        if(err) {
            console.log(err);
        }

        var data = result[0];

        if( avatar ) {
            var conditions = {name: name};
            var update = {$set:{ avatar: avatar }};
            var options = {upsert: true};
            User.update(conditions, update,options, function(err, result) {
                if(err) {
                    console.log(err);
                } else {
                    res.send("update ok");
                }
            })
        }


    });
});

router.get('/uqName/:name', function(req, res, next) {
    var name = req.params.name;

    User.findByName(name, function(err, result) {
        if(err) {
            console.log(err);
        }
        if( result.length > 0 ) {
            res.status(500).send({code:500, data:{},msg:"抱歉该帐号已被使用请更换用户名注册！" });

        } else {
            res.status(200).send({code:200, data:{},msg:"恭喜，该用户名未被使用！" });

        }




    });
});

module.exports = router;
