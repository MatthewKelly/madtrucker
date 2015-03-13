'use strict';

/**
 * @ngdoc function
 * @name madtruckerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the madtruckerApp
 */
angular.module('madtruckerApp')
  .controller('MainCtrl', function ($scope, $http, x2js, drivers) {
    $http.get('data.xml').success(function (data) {
      var driversData = x2js.xml_str2json(data);
      $scope.drivers = drivers.convertToModel(driversData.Data.DriverActivity);
      
    });
  });
