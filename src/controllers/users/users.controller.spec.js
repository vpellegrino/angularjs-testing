describe('when users controller', function() {

    var userCtrlScope, UsersService, d;

    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        }
    ];

    beforeEach(module('app.controllers'));
    beforeEach(module('app.services'));

    beforeEach(inject(function($q, $rootScope, _$controller_, _UsersService_){
        userCtrlScope = $rootScope.$new();

        d = $q.defer();
        UsersService = _UsersService_;
        spyOn(UsersService, 'getAll').and.returnValue(d.promise);

        _$controller_('UsersController', {
            $scope: userCtrlScope,
            UsersService: UsersService
        });
    }));

    describe('getting initialized', function() {
        it('should expose names properties to the view', function () {
            expect(userCtrlScope.names).toBeDefined();
        });

        it('should call getAll on UsersService only one time', function() {
            expect(UsersService.getAll).toHaveBeenCalled();
            expect(UsersService.getAll.calls.count()).toBe(1);
        });
    });

    describe('rendering the page with no errors', function() {
        it('should show all names gathered from UsersService', function() {
            d.resolve(userList);
            userCtrlScope.$digest();
            expect(userCtrlScope.names).toEqual(['Jane', 'Bob']);
        });

        it('should show no error message', function() {
            d.resolve(userList);
            userCtrlScope.$digest();
            expect(userCtrlScope.hasError).toBe(false);
            expect(userCtrlScope.errorMsg).not.toBeDefined();
        });
    });

    describe('rendering the page with errors', function() {
        it('should show error message', function() {
            d.reject('Some error occured');
            userCtrlScope.$digest();
            expect(userCtrlScope.hasError).toBe(true);
            expect(userCtrlScope.errorMsg).toBe('Some error occured');
        });
    });

});
