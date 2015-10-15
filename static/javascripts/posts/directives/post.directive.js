/**
 * Created with PyCharm.
 * User: ramshahjahangir
 * Date: 10/15/15
 * Time: 5:18 PM
 * To change this template use File | Settings | File Templates.
 */

(function () {
  'use strict';

  angular
    .module('thinkster.posts.directives')
    .directive('post', post);

  function post() {
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };

    return directive;
  }
})();