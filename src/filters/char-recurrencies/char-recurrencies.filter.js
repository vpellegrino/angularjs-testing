/**
 * AngularJS filter used to display char recurrences for a given string
 * @author vpellegr
 */
angular.module('app.filters', [])
    .filter('CharRecurrencesFilter', function () {
        return function (input) {

            if (!angular.isArray(input) || !input.length) {
                return [];
            }

            var occurrences = input.reduce(function (occurrenceMap, currValue) {
                if (occurrenceMap.hasOwnProperty(currValue)) {
                    occurrenceMap[currValue] += 1;
                } else {
                    occurrenceMap[currValue] = 1;
                }
                return occurrenceMap;
            }, {});

            var topOccurrences = [];
            angular.forEach(occurrences, function (count, charItem) {
                if (count > 1) {
                    topOccurrences.push(charItem);
                }
            });

            return topOccurrences;
        };
    });
