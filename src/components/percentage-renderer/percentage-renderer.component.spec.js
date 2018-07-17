describe('when passing a value to percentageRenderer component', function() {

    var parentScope;
    var element;

    beforeEach(angular.mock.module('app.components'));
    beforeEach(inject(function($compile, $rootScope){
        parentScope = $rootScope.$new();
        parentScope.someAttr = 0.65;
        element = angular.element('<percentage-renderer value="someAttr"></percentage-renderer>');
        $compile(element)(parentScope);
        parentScope.$digest();
    }));

    describe('given a number between 0 and 1 as initial (default) value', function() {
        it('displays its corresponding percentage', function() {
            var someAttrValue = $(element).find('#value-element').text();
            expect(someAttrValue).toEqual('65%');
        });
    });

    describe('given a random text as changing (new) value', function() {
        it('displays an invalid input message', function() {
            parentScope.someAttr = 'SOME TEXT';
            parentScope.$digest();
            var someAttrValue = $(element).find('#value-element').text();
            expect(someAttrValue).toEqual('Not a valid input');
        });
    });

});