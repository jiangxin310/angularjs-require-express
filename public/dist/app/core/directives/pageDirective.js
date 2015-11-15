define(['angular','app'], function(angular,app) {

    app.directive('pagination',function() {
       return {
           restrict: 'E',
           scope:{
               numPages: '=',
               currentPage: '=',
               onSelectPage: '&'
           },
           template:[
               '<div class="dataTables_paginate paging_bootstrap pagination">',
                   '<ul>',
                       '<li class="prev" ng-class="{disabled: noPrevious()}">',
                            '<a ng-click="selectPrevious()">← Previous</a>',
                       '</li>',
                       '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}">',
                            '<a ng-click="selectPage(page)">{{page}}</a>',
                       '</li>',
                       '<li class="next" ng-class="{disabled: noNext()}">',
                            '<a ng-click="selectNext()">Next → </a>',
                       '</li>',
                   '</ul>',
               '</div>'
           ].join(''),
           replace:true,
           link: function(scope) {
               scope.$watch('numPages', function(value) {
                   scope.pages = [];
                   for(var i = 1; i <= value; i++) {
                       scope.pages.push(i);
                   }
               });

               scope.isActive = function(page) {
                   return scope.currentPage === page;
               };

               scope.noPrevious = function() {
                   return scope.currentPage === 1;
               };

               scope.noNext = function() {
                   return scope.currentPage === scope.numPages;
               }

               scope.selectPage = function(page) {
                   if( !scope.isActive(page) ) {
                       scope.currentPage = page;
                       scope.onSelectPage({ page: page });
                   }
               };

               scope.selectPrevious = function() {
                   if( !scope.noPrevious() ) {
                       scope.selectPage(scope.currentPage - 1);
                   }
               };

               scope.selectNext = function() {
                   if( !scope.noNext() ) {
                       scope.selectPage(scope.currentPage + 1);
                   }
               }

           }
       }
    })
})