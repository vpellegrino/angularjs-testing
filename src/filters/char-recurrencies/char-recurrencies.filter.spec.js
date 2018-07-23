describe('when applying charRecurrences filter', function () {
    var getCharRecurrencesFilter;

    beforeEach(module('app.filters'));

    beforeEach(inject(function ($filter) {
        getCharRecurrencesFilter = $filter('CharRecurrencesFilter');
    }));

    describe('given an empty input list', function () {
        var inputChars = [];

        it('returns an empty character list', function () {
            var expectedOutput = [];

            var test = getCharRecurrencesFilter(inputChars);
            expect(test).toEqual(expectedOutput);
        });
    });

    describe('given a list with non distinct characters', function () {
        var inputChars = ['c', 'a', 'i', 'o', 'p', 'a'];

        it('returns the list of the not distinct characters', function () {

            var expectedOutput = ['a'];

            var test = getCharRecurrencesFilter(inputChars);
            expect(test).toEqual(expectedOutput);
        });
    });

});
