/**
 * Created by sundongzhi on 15/11/9.
 */
define(['angular','uiRouter','ngRequire','ngResource','core/directives/button','core/directives/validateEqual','core/directives/uniqueName'], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.router',
        'ngRequire',
        'app.directive.button',
        'app.directive.validateEqual',
        'app.directive.uniqueName'
    ]);
});