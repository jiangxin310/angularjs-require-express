var ash = angular.module('ash', []).directive("ngInfiniteScroll", function ($timeout, Data, Resource) {

    return {
        restrict: 'A',
        scope: {
            options: '=?',
            items: '=?'
        },
        link: function ($scope, element) {
            $scope.options = angular.extend({
                limit: 10,
                threshold: 50,
                data: [],
                onDocument: false
            }, $scope.options ? $scope.options : {});

            $scope.lastRemain = undefined;
            $scope.offset = 0;
            $scope.inProcess = false;
            $scope.hasItems = true;
            $scope.filterUpdateCount = 0;

            if (!$scope.options.data.resource && !Array.isArray($scope.options.data)) {
                $scope.options.data = [$scope.options.data];
            }
            if ($scope.options.data.resource) {
                $scope.strategy = Resource;
                $scope.$watch('options.data.filter', function() {
                    $scope.filterUpdateCount++;

                    $scope.items = [];
                    $scope.lastRemain = undefined;
                    $scope.offset = 0;
                    $scope.inProcess = false;
                    $scope.hasItems = true;
                    $scope.strategy.addItems($scope, $scope.filterUpdateCount);
                }, true);
            } else {
                $scope.strategy = Data;
                $scope.strategy.addItems($scope);
            }

            var checkRemainSpace = function(remain) {
                if (remain < $scope.options.threshold && (!$scope.lastRemain || (remain - $scope.lastRemain) < 0) && $scope.hasItems) {
                    $scope.$apply(function() {
                        $scope.strategy.addItems($scope);
                    });
                }

                $scope.lastRemain = remain;
            };

            if ($scope.options.onDocument) {
                $(document).bind('scroll', function () {
                    var remain = document.documentElement.scrollHeight - (document.documentElement.clientHeight + window.pageYOffset || document.documentElement.scrollTop);
                    checkRemainSpace(remain);
                });
            } else {
                element.bind('scroll', function () {
                    var remain = element[0].scrollHeight - (element[0].clientHeight + element[0].scrollTop);
                    checkRemainSpace(remain);
                });
            }
        }
    }

});

ash.factory('Data', function() {
    return {
        addItems: function($scope) {
            if (!$scope.inProcess) {
                $scope.inProcess = true;

                var from = $scope.offset * $scope.options.limit;
                if (from < $scope.options.data.length) {
                    var to = from + $scope.options.limit;
                    to = to > $scope.options.data.length ? $scope.options.data.length : to;

                    for (var i = from; i < to; i++) {
                        $scope.items = $scope.items.concat($scope.options.data[i]);
                    }

                    $scope.offset++;
                } else {
                    $scope.hasItems = false;
                }

                $scope.inProcess = false;
            }
        }
    };
});

ash.factory('Resource', function() {
    return {
        addItems: function($scope, currentFilterUpdateIteration) {
            if (!currentFilterUpdateIteration) {
                currentFilterUpdateIteration = $scope.filterUpdateCount;
            }
            if (!$scope.inProcess) {
                $scope.inProcess = true;
                var params = angular.extend(
                    { offset: $scope.offset * $scope.options.limit, limit: $scope.options.limit },
                    $scope.options.data.filter
                );

                $scope.options.data.resource.query(
                    params,
                    function (data) {
                        if (data.length == 0) {
                            $scope.hasItems = false;
                        } else {
                            if (currentFilterUpdateIteration == $scope.filterUpdateCount) {
                                for (var i = 0; i < data.length; i++) {
                                    $scope.items = $scope.items.concat(data[i]);
                                }
                                $scope.offset++;
                            }
                        }

                        $scope.inProcess = false;
                    }
                );
            }
        }
    };
});