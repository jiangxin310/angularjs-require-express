var express = require('express');
var router = express.Router();

var bcrypt = require("bcrypt");


var _ = require("underscore");

var User = require("../database/user").User;



/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });
});



router.route('/login')
    .get(function(req, res) {
        res.render('login', { title: '用户登录' });
    })
    .post(function(req, res) {
        var user = req.body;
        console.log(user);

        User.findByName(user.name, function(err, result) {
            console.log(user.password);
            if(err) {
                console.log(err);
            }

            var data = result[0];

            if( bcrypt.compareSync(user.password, data.password) ) {
                var logUser = {
                    name : user.name,
                    email: data.email,
                    avatar: data.avatar
                }
                req.session.user = logUser;

                res.status(200).send({code:200, data:logUser,msg:"登录成功！" });
                //res.redirect('/home');

            } else {
                res.status(401).send({code:401, data:{},msg:"用户名或密码错误！" });
                //res.redirect('/login');
            }

        });
    });

router.route('/register')
    .get(function(req, res) {
        res.render('register', { title: '用户注册' });

    })
    .post(function(req, res) {
       var params = req.body;
        if( _.isEmpty(params) ) {

            res.status(500).send({code:401, data:{},msg: '请输入正确的信息，进行注册！' });
        } else {

            User.findByName(params.name, function(err, result) {
                if(err) {
                    console.log(err);
                }

                if( result.length > 0 ) {
                    res.status(401).send({ msg: '用户名已存在！' ,code:401, data:{}});

                } else {
                    if( params.password == params.repassword ) {

                        bcrypt.genSalt(10, function(err, salt) {
                            bcrypt.hash(params.password, salt, function(err, hash) {
                                // Store hash in your password DB.
                                var user = new User({
                                    name: params.name,
                                    email: params.email,
                                    password: hash,
                                    avatar: ""
                                });

                                user.save();
                                res.status(200).send({code:200,msg: "注册成功！", data:{}})
                            });
                        });

                    } else {
                        res.status(401).send({ msg: '两次输入的密码不一致！' ,code:401, data:{}});

                    }
                }


            });


        }
        console.log(params);
    });


router.get('/logout', function(req, res) {
    req.session.user = null;
    res.redirect('/');
});

router.get('/home', function(req, res) {
    authentication(req, res);
    res.render('home', { title: 'Home' });
});


router.get('/admin', function(req, res) {
    authentication(req, res);
    res.render('admin', { title: 'Admin' });
});


router.get('/passport', function(req, res) {
    authentication(req, res);
    res.render('passport', { title: 'Passport' });
});

function authentication(req, res) {
    if (!req.session.user) {
        req.session.error='请先登录';
        return res.redirect('/login');
    }
}



router.get('/system/users', function(req, res, next){
    res.json([
        {
            "id": 14,
            "userName": "yangbing",
            "enable": 1,
            "lastIp": "127.0.0.1",
            "roleId": 1,
            "realName": "杨查理",
            "phone": "18607927127",
            "email": null,
            "avatar": "",
            "lastTime": null
        },
        {
            "id": 38,
            "userName": "sundongzhi",
            "enable": 1,
            "lastIp": null,
            "roleId": 1,
            "realName": "孙东芝",
            "phone": "15010547818",
            "email": null,
            "avatar": "",
            "lastTime": null
        },
        {
            "id": 39,
            "userName": "linchaojian",
            "enable": 1,
            "lastIp": null,
            "roleId": 1,
            "realName": "林朝建",
            "phone": "15259187871",
            "email": null,
            "avatar": "",
            "lastTime": null
        },
        {
            "id": 46,
            "userName": "test_81273458",
            "enable": 1,
            "lastIp": null,
            "roleId": 1,
            "realName": "test_81273458",
            "phone": "12245258853",
            "email": null,
            "avatar": "",
            "lastTime": null
        },
        {
            "id": 47,
            "userName": "test_75145263",
            "enable": 1,
            "lastIp": null,
            "roleId": 1,
            "realName": "test_75145263",
            "phone": "12269550300",
            "email": null,
            "avatar": "",
            "lastTime": null
        },
        {
            "id": 48,
            "userName": "test_62866835",
            "enable": 1,
            "lastIp": null,
            "roleId": 1,
            "realName": "test_62866835",
            "phone": "12245325524",
            "email": null,
            "avatar": "",
            "lastTime": null
        },
        {
            "id": 49,
            "userName": "test_87802880",
            "enable": 1,
            "lastIp": null,
            "roleId": 1,
            "realName": "test_87802880",
            "phone": "12207994669",
            "email": null,
            "avatar": "",
            "lastTime": null
        }
    ]);
})

router.get('/menu/get', function(req, res, next) {

    res.json([
        {
            "name": "仪表盘",
            "url": "dashboard",
            "personid": 0,
            "note": "首页",
            "icon": "fa-dashboard",
            "child": false,
            "childMenus": null,
            "id": 1
        },
        {
            "name": "用户管理",
            "url": "user.list",
            "personid": 0,
            "note": "用户管理",
            "icon": "fa-users",
            "child": false,
            "childMenus": [
                {
                    "name": "用户列表",
                    "url": "list",
                    "personid": 5,
                    "note": "用户列表 user/list",
                    "icon": null,
                    "child": false,
                    "childMenus": null,
                    "id": 12
                }
            ],
            "id": 5
        },
        {
            "name": "权限管理",
            "url": "system.permission",
            "personid": 0,
            "note": "",
            "icon": "fa-cogs",
            "child": false,
            "id": 6
        },
        {
            "name": "表单测试",
            "url": "system.form",
            "personid": 0,
            "note": "",
            "icon": "fa-cogs",
            "child": false,
            "id": 8
        },
        {
            "name": "管理员",
            "url": "system.admin",
            "personid": 0,
            "note": "系统设置",
            "icon": "fa-cogs",
            "child": false,
            "id": 7
        }
    ]);
})

module.exports = router;
