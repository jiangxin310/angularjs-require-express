/**
 * Created by toshiba on 15/12/27.
 */
define(['angular'], function(angular) {
    var directives = angular.module("app.directive.alert",[]);

    directives.directive("alert", function() {
       return {
           restrict:"E",
           replace: true,
           transclude: true,
           template: '<div class="alert alert-{{type}}">'+
               '<button type="button" class="close" '+
               'ng-click="close()" >&times;' +
               '</button>'+
               '<div ng-transclude=""></div>'+
               '</div>',
           scope: {
               type:"=",
               close:"&"
           }
       }
    });
});