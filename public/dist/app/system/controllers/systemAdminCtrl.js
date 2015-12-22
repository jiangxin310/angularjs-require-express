/**
 * Created by sundongzhi on 15/11/13.
 */
define(['angular','app'], function(angular,app) {

    app.controller('SystemAdminController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams) {
        //Menus.query();
        $scope.users="";

        $scope.perPage = "10";

        $scope.$watch("perPage", function(value) {
            var page = 1;
            $scope.perPage
            if( $scope.perPage &&  !isNaN(Number($scope.perPage)) ) {
                askUserList(page);
            }

        });

        $scope.pageCallback = function(page) {
            //$state.go("admin.system.admin.users", { page: page });
            askUserList(page);
        }


        var page = $stateParams.page?$stateParams.page:1;


        askUserList(page);

        function askUserList(page) {
            $http.get('/system/users/'+ page +'?pageNum=' + $scope.perPage).success(function(data, status, headers,config) {
                //console.log(data);
                $scope.tasks = {
                    pageCount : data.totalPage,
                    currentPage: data.currentPage
                }

                $scope.users = data.pageList;
            }).error(function(data, status, headers,config) {
                throw new Error("请求发生错误！");
            })
        }



    }])
})