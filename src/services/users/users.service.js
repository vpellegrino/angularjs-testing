angular.module('app.services', [])
    .constant('_', window._)
    .service('UsersService', function ($http, _) {
        var Users = {};

        Users.getAll = function () {
            return _retrieveAllByPredicate(function() { return true });
        };

        Users.findById = function (id) {
            return _retrieveAllByPredicate(function(user) {
                return user.hasOwnProperty('id') && user.id === id;
            }).then(function (foundUsers) {
                return angular.isArray(foundUsers) && foundUsers.length && _.first(foundUsers) || undefined;
            });
        };

        function _retrieveAllByPredicate(predicate) {
            return $http({method: 'GET', url: "./users.mocked.json"})
                .then(function (response) {
                    return _.filter(response.data.data, predicate);
                }, function (error) {
                    console.error("Something went wrong, while loading users", error);
                });
        }

        return Users;
    });
