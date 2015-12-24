/**
 * Created by sundongzhi on 15/11/3.
 */
requirejs.config({
    baseUrl:'/app/',
    paths:{
        'jquery':'/vendor/jquery-1.10.2.min',
        'underscore':'/vendor/underscore/underscore-min',
        'angular':'/vendor/angular.min',
        'uiRouter':'/vendor/angular-ui-router/release/angular-ui-router.min',
        'ngResource':'/vendor/angular-resource/angular-resource.min',
        'ngRequire':'/vendor/angular-require/angular-require.min',
        'ngAnimate':'/vendor/angular-animate/angular-animate.min',
        'mainRouter':'core/mainRouter',
        'settingsRouter':'settings/settingsRouter',
        'dashboardRouter':'dashboard/dashboardRouter',
        'systemRouter':'system/systemRouter',
        'userRouter':'user/userRouter',
        'app':'core/app'
    },
    shim: {
        'angular': {'exports' : 'angular'},
        'uiRouter':['angular'],
        'ngResource':['angular'],
        'ngRequire':['angular'],
        'bootstrap': {
            deps: ['jquery']
        }
    },
    priority: [
        "angular"
    ]
});


require(['angular','app','mainRouter'],function(angular) {
    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element(document).ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['app']);
    });


});