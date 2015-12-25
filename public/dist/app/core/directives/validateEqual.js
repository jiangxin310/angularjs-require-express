/**
 * Created by sundongzhi on 15/12/24.
 */
define(['angular'], function(angular) {

    //自定义fomr验证指令，这里验证两个密码是否相等
    var directives = angular.module('app.directive.validateEqual',[]);

    return directives.directive("validateEqual", function() {
        return {
            require:'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {

                function validateEqual(myValue) {
                    var valid = (myValue === scope.$eval(attrs.validateEqual));
                    ngModelCtrl.$setValidity('equal', valid);
                    return valid? myValue: undefined;
                }


                ngModelCtrl.$parsers.push(validateEqual);

                ngModelCtrl.$formatters.push(validateEqual);

                scope.$watch(attrs.validateEqual, function() {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        }
    })

});