angular.module('app.controllers', [])
    .controller('UsersController', function($scope) {
        $scope.names = [
            {name:'Jani',country:'Norway'},
            {name:'Hege',country:'Sweden'},
            {name:'Kai',country:'Denmark'}
        ];

        $scope.getNames = function() {
            return $scope.names;
        }
    });
