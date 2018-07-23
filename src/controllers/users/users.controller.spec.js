describe('when users controller gets initialized', function() {

    var userCtrlScope;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function(_$controller_){
        userCtrlScope = {};
        _$controller_('UsersController', { $scope: userCtrlScope });
    }));

    describe('and renders the page', function() {

        it('should expose names property to the view', function() {
            expect(userCtrlScope.names).toBeDefined();
            expect(angular.isArray(userCtrlScope.names)).toBe(true);
            expect(userCtrlScope.names.length).toEqual(3);
        });

        it('should expose a method to get names', function() {
            expect(userCtrlScope.getNames).toBeDefined();
            expect(angular.isFunction(userCtrlScope.getNames)).toBe(true);
        });

    });

});
