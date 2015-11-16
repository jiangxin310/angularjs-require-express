/**
 * Created by sundongzhi on 15/11/13.
 */
define(['angular','app'], function(angular,app) {

    app.controller('UserListController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams) {
        //Menus.query();
        $scope.users="";

        $scope.pageCallback = function(page) {
            console.log($stateParams + "----" + page);
            $state.go("admin.system.admin", { page: page });
        }

        console.log($stateParams);

        var page = $stateParams.page?$stateParams.page:1;

        $http.get('/system/users/'+ page +'?pageNum=2').success(function(data, status, headers,config) {
            //console.log(data);
            $scope.tasks = {
                pageCount : data.totalPage,
                currentPage: data.currentPage
            }

            $scope.users = data.pageList;
        }).error(function(data, status, headers,config) {
            throw new Error("请求发生错误！");
        })


    }])
})