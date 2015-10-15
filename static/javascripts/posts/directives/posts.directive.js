/**
 * Created with PyCharm.
 * User: ramshahjahangir
 * Date: 10/15/15
 * Time: 3:53 PM
 * To change this template use File | Settings | File Templates.
 */

(function () {
  'use strict';

  angular
    .module('thinkster.posts.directives')
    .directive('posts', posts);

  function posts() {
    var directive = {
      controller: 'PostsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/templates/posts/posts.html'
    };

    return directive;
  }
})();
