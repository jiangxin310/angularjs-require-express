var express = require('express');
var router = express.Router();

var User = require("../database/user").User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
