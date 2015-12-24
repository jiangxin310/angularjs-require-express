/**
 * Created by sundongzhi on 15/12/24.
 */

define(['angular'], function(angular) {

    var directives = angular.module('app.directive.uniqueName',[]);

    return directives.directive("uniqueName",['$http',function($http) {
        return {
            require:'ngModel',
            link: function(scope, element,attrs,ngModelCtrl) {
                var original;
                ngModelCtrl.$formatters.push(validateName);

                ngModelCtrl.$parsers.push(validateName);

                function validateName(viewValue) {
                    if(viewValue && viewValue !== original) {
                        //console.log(viewValue);
                        $http.get("/users/uqName/"+viewValue)
                            .success(function(data, status, headers, config){
                                if( data.code == 200 ) {
                                    ngModelCtrl.$setValidity("uniqueName", true);
                                    return viewValue;

                                }
                            }).error(function(data, status, headers, config){
                                if( data.code == 500 ) {
                                    ngModelCtrl.$setValidity("uniqueName", false);
                                    return undefined;
                                }
                            });

                        return viewValue;
                    }
                }
            }
        }
    }])

});