/**
 * Created by sundongzhi on 15/11/9.
 */
define([
    'angular',
    'uiRouter',
    'ngRequire',
    "ngInfiniteScroll",
    'ngResource',
    'core/directives/button',
    'core/directives/validateEqual',
    'core/directives/uniqueName',
    'core/directives/alert',
    'core/directives/datePicker',
    'core/emailParser'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.router',
        'ngRequire',
        'ash',
        'app.directive.button',
        'app.directive.validateEqual',
        'app.directive.uniqueName',
        'app.directive.alert',
        'app.directive.datePicker',
    ]);
});