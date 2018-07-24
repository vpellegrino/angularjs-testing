/**
 * AngularJS controller used to render users
 * @author vpellegr
 */
angular.module('app.controllers', [])
    .constant('_', window._)
    .controller('UsersController', ['$scope', 'UsersService', '_', function($scope, UsersService, _) {

        $scope.names = [];

        UsersService
            .getAll()
            .then(
                function(users) {
                    $scope.hasError = false;
                    $scope.errorMsg = undefined;
                    $scope.names = _.map(users, 'name');
                },
                function (error) {
                    $scope.hasError = true;
                    $scope.errorMsg = error;
                });

    }]);
