'use strict';

describe('Controller: ActivityCtrl', function () {

  // load the controller's module
  beforeEach(module('madtruckerApp'));

  var ActivityCtrl,
    scope,
    drivers,
    x2js,
    httpBackend;

  x2js = { xml_str2json : function (input) { return input; } };
  drivers = { getDriver : function (input , id) { return input[id]; } };

  var driversData = {
    Data : {
      DriverActivity : [ {}, {id : 1}, {}]
    }

  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend
    httpBackend.when("GET", "data.xml").respond(driversData);
    ActivityCtrl = $controller('ActivityCtrl', {
      $scope: scope,
      $http : $http, 
      x2js : x2js,
      drivers : drivers,
      $routeParams : { id : 1}
    });
  }));

  it('should add driver data to the scope', function () {
    httpBackend.flush();
    expect(scope.driver.id).toBe(1);
  });
});
