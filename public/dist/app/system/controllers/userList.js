/**
 * Created by sundongzhi on 15/11/13.
 */
define(['angular','app'], function(angular,app) {

    app.controller('SystemUserListController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams) {
        var data ={
            "totalNum": 11,
            "totalPage": 2,
            "pageList": [
                {
                    "id": 14,
                    "userName": "yangbing",
                    "enable": 1,
                    "lastIp": "127.0.0.1",
                    "roleId": 1,
                    "realName": "杨查理",
                    "phone": "18607927127",
                    "email": null,
                    "avatar": "http://longdai-ms.b0.upaiyun.com/dohko/images/images (1).jpg!ms",
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
                    "email": "sdz001@gozap.com",
                    "avatar": "http://longdai-ms.b0.upaiyun.com/dohko/images/r1.jpg!ms",
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
                    "email": "linchaojain@ezhe.com",
                    "avatar": "http://longdai-ms.b0.upaiyun.com/dohko/images/u=1053013771,3684327500&fm=21&gp=0.jpg!ms",
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
                },
                {
                    "id": 59,
                    "userName": "wangjin",
                    "enable": 1,
                    "lastIp": null,
                    "roleId": 1,
                    "realName": "王进",
                    "phone": "18618266635",
                    "email": "wangjin@gozap.com",
                    "avatar": "",
                    "lastTime": null
                },
                {
                    "id": 104,
                    "userName": "test1",
                    "enable": 1,
                    "lastIp": null,
                    "roleId": 5,
                    "realName": "test",
                    "phone": "15888888888",
                    "email": null,
                    "avatar": "",
                    "lastTime": null
                },
                {
                    "id": 105,
                    "userName": "fanlushuai",
                    "enable": 1,
                    "lastIp": null,
                    "roleId": 1,
                    "realName": "樊禄帅",
                    "phone": "15712936067",
                    "email": "fanlushuai@gozap.com",
                    "avatar": "",
                    "lastTime": null
                }
            ],
            "currentPage": 1,
            "pageNum": 10
        }



        $scope.items = [];
        $scope.data = data.pageList;


        for (var i = 0; i < 200; i++) {
            $scope.data.push({
                "id": 105,
                "userName": "fanlushuai",
                "enable": 1,
                "lastIp": null,
                "roleId": 1,
                "realName": "樊禄帅",
                "phone": "15712936067",
                "email": "fanlushuai@gozap.com",
                "avatar": "",
                "lastTime": null
            });
        }

        $scope.options = {
            limit: 20,
            data: $scope.data,
            onDocument: true
        };




    }])
})