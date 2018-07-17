angular.module('app.components', [])
    .component('percentageRenderer', {
        bindings: {
            value: '<' // percentage value, from 0 to 1
        },
        controller: function(){
            this.$onChanges = function() {
                if (isNaN(this.value) || this.value<0 || this.value>1) {
                    this.value = "Not a valid input";
                } else {
                    this.value = (this.value * 100).toString() + '%';
                }
            }
        },
        template:
        '<div>' +
        ' <span id="value-element">{{ $ctrl.value }}</span>' +
        '</div>'
    });
