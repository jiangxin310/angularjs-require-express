/**
 * Created by sundongzhi on 15/12/24.
 */

define(['angular','app'], function(angular,app) {

    app.controller('SystemFormController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams) {
        $scope.user = {
            myDate:123564
        };

        $scope.dateOpt = {
                showOtherMonths: true,
                selectOtherMonths: true,
                dateFormat:'yy-mm-dd',
                changeMonth: true,
                changeYear: true
        }

        $scope.$watch("user.myDate", function(v) {
            console.log(v);
        })

       // $.datepicker.setDefaults( $.datepicker.regional[ "zh-CN" ] );

        //$("#myDate").datepicker({
        //    showOtherMonths: true,
        //    selectOtherMonths: true,
        //    dateFormat:'yy-mm-dd',
        //    changeMonth: true,
        //    changeYear: true
        //});


        $scope.updateAva = function() {
            $http.post("/users/updateAva", {avatar: "te12121111111st"})
                .success(function(data, status, headers, config) {
                   console.log(data);
                });
        }
    }])
})