'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'partials/calculator.html',
      controller: 'MortgageCalculatorController'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
