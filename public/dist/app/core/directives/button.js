/**
 * Created by sundongzhi on 15/12/24.
 */
define(['angular'], function(angular) {

    var directives = angular.module('app.directive.button',[]);

    return directives.directive("button", function() {
        return {
            restrict:'E',
            compile: function(element, attributes) {
                element.addClass('btn');
                if( attributes.type==='submit' ) {
                    element.addClass("btn-primary");
                };

                if( attributes.size ) {
                    element.addClass('btn-' + attributes.size);
                }
            }
        }
    })

});