/**
 * AngularJS service used to handle REST users resources
 * @author vpellegr
 */
angular.module('app.services', [])
    .constant('_', window._)
    .service('UsersService', function ($http, _) {

        /**
         * Retrieves all users
         * @return {Promise<Array>} a promise to return an array of users
         */
        this.getAll = function () {
            return _retrieveAllByPredicate(function() { return true });
        };

        /**
         * Retrieves the user that matches a given identifier
         * @param id {string} user identifier
         * @return {Promise<Object>} a promise to return a single user
         */
        this.findById = function (id) {
            return _retrieveAllByPredicate(function(user) {
                return user.hasOwnProperty('id') && user.id === id;
            }).then(function (foundUsers) {
                return angular.isArray(foundUsers) && foundUsers.length && _.first(foundUsers) || undefined;
            });
        };

        /**
         * Retrieves all users and filters them by the given predicate
         * @param predicate {function} a predicate used to filter returned users
         * @return {Promise<Array>} a promise to return an array of users
         * @private
         */
        function _retrieveAllByPredicate(predicate) {
            return $http({method: 'GET', url: "./users.mocked.json"})
                .then(function (response) {
                    return _.filter(response.data.data, predicate);
                }, function (error) {
                    console.error("Something went wrong, while loading users", error);
                });
        }

    });
