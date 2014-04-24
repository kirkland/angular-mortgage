'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MortgageCalculatorController', function($scope) {
    $scope.price = 300000;
    $scope.interest_rate = 0.04125;
    $scope.down_payment_percent = 20;
    $scope.down_payment_amount = $scope.price * $scope.down_payment_percent / 100;
    $scope.locked = false;

    $scope.loan_amount = function() {
      return $scope.price - $scope.down_payment_amount;
    }

    $scope.monthly_payment = function() {
      var monthly_interest_rate = $scope.interest_rate / 12;
      var magic = Math.pow(1 + monthly_interest_rate, 360);
      var numerator = monthly_interest_rate * magic;
      var denominator = magic - 1;

      return $scope.loan_amount() * numerator / denominator;
    }

    $scope.$watch('down_payment_percent', function(newValue, oldValue) {
      if ( $scope.locked === false) {
        $scope.locked = true;
        $scope.down_payment_amount = $scope.down_payment_percent * $scope.price / 100;
      } else {
        $scope.locked = false;
      }
    });

    $scope.$watch('down_payment_amount', function(newValue, oldValue) {
      if ( $scope.locked === false) {
        $scope.locked = true;
        $scope.down_payment_percent = $scope.down_payment_amount / $scope.price * 100;
      } else {
        $scope.locked = false;
      }
    });
  })
