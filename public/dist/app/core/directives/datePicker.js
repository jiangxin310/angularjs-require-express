/**
 * Created by sundongzhi on 15/12/24.
 */
define(['angular'], function(angular) {
   var directives = angular.module('app.directive.datePicker',[]);

    return directives.directive("datePicker", [function() {

    //简单有效实现 from http://www.abequar.net/posts/jquery-ui-datepicker-with-angularjs
    //    return {
    //        restrict: 'A',
    //        require : 'ngModel',
    //        link : function (scope, element, attrs, ngModelCtrl) {
    //            $(function(){
    //                element.datepicker({
    //                    dateFormat:'yy-mm-dd',
    //                    showOtherMonths: true,
    //                    selectOtherMonths: true,
    //                    changeMonth: true,
    //                    changeYear: true,
    //                    onSelect:function (date) {
    //                        scope.$apply(function () {
    //                            ngModelCtrl.$setViewValue(date);
    //                        });
    //                    }
    //                });
    //            });
    //        }
    //    }

        return {
            require:"ngModel",
            link: function(scope, element, attrs, ngModelCtrl) {
                ngModelCtrl.$formatters.push(function(date) {
                    if(angular.isDefined(date) && date !==null&& !angular.isDate(date) ) {
                        throw new Error('ng-Model value must be date');
                    }
                    return date;
                });

                var updateModel = function(date) {
                    var date = date||"";
                    scope.$apply(function() {
                        //var date = element.datepicker("getDate");
                        //element.datepicker("setDate", element.val());
                        ngModelCtrl.$setViewValue(date);
                    });
                }

                var onSelectHandle = function(userHandler) {
                    if(userHandler) {
                        return function(value, picker) {
                            //updateModel();
                            return userHandler(value, picker);
                        }
                    } else {
                        return updateModel;
                    }
                }


                var setUpdatePicker = function() {
                    var options = {
                        showOtherMonths: true,
                        selectOtherMonths: true,
                        dateFormat:'yy-mm-dd',
                        changeMonth: true,
                        changeYear: true,
                        onSelect: function(date) {
                            updateModel(date);
                        }
                    };

                    options.onSelect = onSelectHandle(options.onSelect);

                    element.bind('change', updateModel);
                    element.datepicker('destroy');
                    element.datepicker(options);
                    ngModelCtrl.$render();
                }

                ngModelCtrl.$render = function() {
                    element.datepicker("setDate", ngModelCtrl.$viewValue);
                }

                scope.$watch(attrs.datePicker, setUpdatePicker, true);
            }
        }
    }])
});