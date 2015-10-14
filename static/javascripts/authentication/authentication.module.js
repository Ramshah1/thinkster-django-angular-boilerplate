/**
 * Created with PyCharm.
 * User: ramshahjahangir
 * Date: 10/14/15
 * Time: 4:32 PM
 * To change this template use File | Settings | File Templates.
 */

(function () {
  'use strict';

  angular
    .module('thinkster.authentication', [
      'thinkster.authentication.controllers',
      'thinkster.authentication.services'
    ]);

  angular
    .module('thinkster.authentication.controllers', []);

  angular
    .module('thinkster.authentication.services', ['ngCookies']);
})();