'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('madtruckerApp'));

  var MainCtrl,
    scope,
    drivers,
    x2js,
    httpBackend;

  x2js = { xml_str2json : function (input) { return input; } };
  drivers = { convertToModel : function (input ) { return input; } };

  var driversData = {
    Data : {
      DriverActivity : [ {}, {}, {}]
    }

  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend
    httpBackend.when("GET", "data.xml").respond(driversData);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $http : $http, 
      x2js : x2js,
      drivers : drivers,
    });
  }));

  it('should add drivers to the scope', function () {
    httpBackend.flush();
    expect(scope.drivers.length).toBe(3);
  });
});
