'use strict';

/**
 * @ngdoc service
 * @name madtruckerApp.drivers
 * @description
 * # drivers
 * Service in the madtruckerApp.
 */
angular.module('madtruckerApp')
  .service('drivers', function () {
    return {
    	convertToModel : function (data) {
    		var groupedDriverActivity = linq(data).groupBy(function(activity) { return activity.Driver_ID }).get();
    		var drivers = [];
    		angular.forEach(groupedDriverActivity, function(value) {
  				this.push({
					id: value[0].Driver_ID,
					firstName : value[0].Forename,
					lastName : value[0].Surname,
					activities : value
  				});
			}, drivers);

    		return drivers;
    	}, 
    	getDriver : function (data, driverId) {
    		var drivers = this.convertToModel(data);
    		var driver = linq(drivers).first(
    			function(driver) { 
    				return driver.id == driverId}
				);
    		return driver;

    	}
    }
  });
