describe('when users controller gets initialized', function() {

    var usersController, $scope;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function(_$controller_){
        $scope = {};
        usersController = _$controller_('UsersController', { $scope: $scope });
    }));

    describe('and renders the page', function() {

        it('should expose names property to the view', function() {
            expect($scope.names).toBeDefined();
            expect(angular.isArray($scope.names)).toBe(true);
            expect($scope.names.length).toEqual(3);
        });

        it('should expose a method to get names', function() {
            expect($scope.getNames).toBeDefined();
            expect(angular.isFunction($scope.getNames)).toBe(true);
        });

    });

});
