/**
 * Created by sundongzhi on 15/12/24.
 */

define(['angular','app'], function(angular,app) {

    app.controller('SystemFormController',['$scope','$http','$state','$stateParams','EmailParser',function($scope,$http,$state,$stateParams,EmailParser) {
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

        $scope.alerts = [
            {type:"info", msg: "hello world"},
            {type:"warning", msg: "sdsds world"},
            {type:"success", msg: "hello sdsd444"},
            {type:"danger", msg: "hello sdsd444"},
            {type:"primary", msg: "h33333"}

        ]
        $scope.$watch("user.myDate", function(v) {
            console.log(v);
        });

        $scope.closeAlert = function($index) {
            console.log($index);
        }

       // $.datepicker.setDefaults( $.datepicker.regional[ "zh-CN" ] );

        //$("#myDate").datepicker({
        //    showOtherMonths: true,
        //    selectOtherMonths: true,
        //    dateFormat:'yy-mm-dd',
        //    changeMonth: true,
        //    changeYear: true
        //});

        $scope.sourceList = [
            {
                id: 1002,
                name:'Annit'
            },
            {
                id: 1003,
                name:'tom'
            },
            {
                id: 1004,
                name:'whie'
            },
            {
                id: 1005,
                name:'jack'
            }
        ]


        $.selectItem = $scope.sourceList[0];


//interpolate
        $scope.to = 'ari@fullstack.io';
        $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
          // Set up a watch
        $scope.$watch('emailBody', function(body) {
            if (body) {
              $scope.previewText = EmailParser.parse(body, {to: $scope.to});
            }

        })

        $scope.updateAva = function() {
            $http.post("/users/updateAva", {avatar: "te12121111111st"})
                .success(function(data, status, headers, config) {
                   console.log(data);
                });
        }
    }])
})