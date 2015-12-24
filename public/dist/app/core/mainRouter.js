/**
 * Created by sundongzhi on 15/11/3.
 */
define([
    'app',
    'dashboardRouter',
    'settingsRouter',
    'systemRouter',
    'userRouter'
    ], function (
        app,
        dashboardRouter,
        settingsRouter,
        systemRouter,
        userRouter
    ) {
    'use strict';

    var routerArr = [];
    routerArr.push(
        dashboardRouter,
        settingsRouter,
        systemRouter,
        userRouter
    );


    return app.config(['$httpProvider','$stateProvider', '$urlRouterProvider','$requireProvider',function ($httpProvider,$stateProvider, $urlRouterProvider,$requireProvider) {


        $httpProvider.interceptors.push(function ($q, $rootScope) {

            return {
                request: function (config) {
                    $rootScope.ajaxLoading = true;
                    config.requestTimestamp = new Date().getTime();
                    return config;
                },
                response: function (response) {
                    $rootScope.ajaxLoading = false;
                    response.config.responseTimestamp = new Date().getTime();

                    //如果返回code为200 则调整高度
                    if(response && response.data&& response.data.code == 200) {

                    }
                    return response;

                },

                requestError: function(rejection) {
                    $rootScope.ajaxLoading = false;

                    return $q.reject(rejection);
                },

                responseError: function(rejection) {
                    $rootScope.ajaxLoading = false;
                    var data = rejection.data;

                    if( rejection && rejection.data ) {

                    }

                    return $q.reject(rejection);
                }

            };
        });

        $urlRouterProvider.otherwise("/admin/dashboard");

        $stateProvider.state("admin", {
            url: "/admin",
            views: {
                "viewLeft": {
                    templateUrl: "app/core/tmpl/nav-left.html",
                    controller:'MenuController',
                    resolve:{
                        deps:$requireProvider.requireJS([
                            'core/controllers/menu'
                        ])
                    }
                },
                "viewRightCon": {
                    templateUrl: "app/core/tmpl/nav-con.html"
                }
            }
        });


        angular.forEach(routerArr, function (routerItem) {

            angular.forEach(routerItem, function(urlInfo, state) {

                angular.forEach(urlInfo.views, function(viewInfo) {

                    if( viewInfo && viewInfo.resolve && viewInfo.resolve.deps  ) {
                        viewInfo.resolve.deps = $requireProvider.requireJS(viewInfo.resolve.deps)
                    }
                });
                $stateProvider.state(state, urlInfo);
            })

        })

    }]);
});