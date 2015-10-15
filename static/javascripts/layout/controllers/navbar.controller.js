/**
 * Created with PyCharm.
 * User: ramshahjahangir
 * Date: 10/15/15
 * Time: 12:15 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    'use strict';

    angular
        .module('thinkster.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject=['$scope', 'Authentication'];

    function NavbarController($scope, Authentication){
        var vm = this;

        vm.logout = logout;

        function logout(){
            Authentication.logout();
        }
    }
})();