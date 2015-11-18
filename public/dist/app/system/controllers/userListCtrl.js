/**
 * Created by sundongzhi on 15/11/13.
 */
define(['angular','app'], function(angular,app) {

    app.controller('UserListController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams) {
        //Menus.query();
        $scope.users="";


        var page = $stateParams.page?$stateParams.page:1;

        console.log("userlist: " + page);
        $http.get('/system/users/'+ page +'?pageNum=3').success(function(data, status, headers,config) {

            $scope.users = data.pageList;
        }).error(function(data, status, headers,config) {
            throw new Error("请求发生错误！");
        })


    }])
})