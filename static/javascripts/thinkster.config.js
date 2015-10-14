/**
 * Created with PyCharm.
 * User: ramshahjahangir
 * Date: 10/14/15
 * Time: 4:39 PM
 * To change this template use File | Settings | File Templates.
 */
(function () {
  'use strict';

  angular
    .module('thinkster.config')
    .config(config);

  config.$inject = ['$locationProvider'];

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
})();