/**
 * Created by sundongzhi on 15/11/9.
 */
define(['angular','app'], function(angular,app) {

    app.controller('MenuController',['$rootScope','$state','$scope','$http','$timeout', function($rootScope,$state,$scope,$http,$timeout) {
            $scope.menus="";
            $http.get('/menu/get').success(function(data, status, headers,config) {
                $scope.menus = data;
            }).error(function(data, status, headers,config) {
                throw new Error("请求发生错误！");
            });





            $rootScope.$on('$stateChangeError', function() {});

            $rootScope.$on('$stateNotFound', function() {});

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                $rootScope.pageLoading = true;
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                $timeout(function() {
                    $rootScope.pageLoading = false;
                },0)
            });


            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
                $timeout(function() {
                    $rootScope.pageLoading = false;
                },0)
            });

            $rootScope.safeApply = function(fn) {
                var phase = this.$root.$$phase;
                if( phase == '$apply' || phase == '$digest' ) {
                    if( fn && (typeof fn == 'function') ) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };




    }])
})