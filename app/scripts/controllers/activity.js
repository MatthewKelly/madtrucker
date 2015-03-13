'use strict';

/**
 * @ngdoc function
 * @name madtruckerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madtruckerApp
 */
angular.module('madtruckerApp')
  .controller('ActivityCtrl', function ($scope, $http, x2js, drivers, $routeParams) {
    $http.get('data.xml').success(function (data) {
      var driversData = x2js.xml_str2json(data);
      $scope.driver = drivers.getDriver(driversData.Data.DriverActivity, $routeParams.id);
    });
  });
