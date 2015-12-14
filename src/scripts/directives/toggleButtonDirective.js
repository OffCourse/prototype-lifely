app.directive('toggleButton', function() {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attributes) {
            var elm = $(element);
            var outsideToggleTarget;
            var target;
            var buttonClickHandler = function(e) {
                target = document.querySelector("[toggle-target=" + attributes.toggleButton + "]");
                $(target).toggleClass(attributes.toggleClass);
            };
            elm.on('click', buttonClickHandler);

            scope.$on('$destroy', function() {
                elm.off('click', clickHandler);
                if (outsideToggleTarget) document.documentElement.removeEventListener('click', outsideClickHandler);
            })
        }
    }
});
