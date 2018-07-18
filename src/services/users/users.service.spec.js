describe('when users service is invoked', function() {

    var usersService;
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
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];
    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function(_usersService_) {
        usersService = _usersService_;
    }));

    describe('retrieving all available users', function() {
        it('should return a hard-coded list of users', function() {
            expect(usersService.all()).toEqual(userList);
        });
    });

    describe('retrieving a particular user by its own id', function() {
        it('should return one user object if it exists', function() {
            expect(usersService.findById('2')).toEqual(singleUser);
        });

        it('should return undefined if the user cannot be found', function() {
            expect(usersService.findById('ABC')).not.toBeDefined();
        });
    });

});