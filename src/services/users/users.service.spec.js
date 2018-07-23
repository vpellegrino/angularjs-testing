describe('when users service is invoked', function() {

    var usersService, $httpBackend;

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

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function(_UsersService_, $injector) {
        usersService = _UsersService_;
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', "./users.mocked.json").respond({data: userList});
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('retrieving all available users', function() {
        it('should return a hard-coded list of users', function() {
            usersService.getAll().then(function(users) {
                expect(users).toEqual(userList);
            });
            $httpBackend.flush();
        });
    });

    describe('retrieving a particular user by its own id', function() {
        it('should return one user object if it exists', function() {
            usersService.findById('2').then(function(user) {
                expect(user).toEqual({
                    id: '2',
                    name: 'Bob',
                    role: 'Developer',
                    location: 'New York',
                    twitter: 'billybob'
                })
            });
            $httpBackend.flush();
        });

        it('should return undefined if the user cannot be found', function() {
            usersService.findById('ABC').then(function(user) {
                expect(user).not.toBeDefined();
            });
            $httpBackend.flush();
        });
    });

});