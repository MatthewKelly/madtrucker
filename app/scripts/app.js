'use strict';

/**
 * @ngdoc overview
 * @name madtruckerApp
 * @description
 * # madtruckerApp
 *
 * Main module of the application.
 */
angular
  .module('madtruckerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xml'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/activity/:id', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
