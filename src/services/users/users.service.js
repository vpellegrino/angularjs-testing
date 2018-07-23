angular.module('app.services', [])
    .service('UsersService', function () {
        var Users = {};
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

        Users.all = function () {
            return userList;
        };

        Users.findById = function (id) {
            for (var i=0; i<userList.length; i++) {
                var user = userList[i];
                if (user.hasOwnProperty('id') && user.id === id) {
                    return user;
                }
            }
        };

        return Users;
    });