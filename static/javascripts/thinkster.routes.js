/**
 * Created with PyCharm.
 * User: ramshahjahangir
 * Date: 10/14/15
 * Time: 4:26 PM
 * To change this template use File | Settings | File Templates.
 */
(function () {
  'use strict';

  angular
    .module('thinkster.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
  controller: 'LoginController',
  controllerAs: 'vm',
  templateUrl: '/static/templates/authentication/login.html'
}).otherwise('/');
  }



})();