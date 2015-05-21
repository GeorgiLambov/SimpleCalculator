var app = app || {};

app.calculator = (function () {
    'use strict'

    var selectorMain = '#calc';

    function BaseController() {
    }

    BaseController.prototype.attachEventHandlers = function () {

        attachCalcHandler.call(this, selectorMain);
    }

    var attachCalcHandler = function (selectorMain) {
        $(selectorMain).on('click', 'button', function (event) {
            var input = $(this).attr('value');
            var display = $('#display').val();

            switch (input) {
                case "clear": display = ""; break;
                case "=": display = eval(display); break;
                default: display += input; break;
            }

            $("#display").attr('value', display);

            // avoid refreshing the page in a bootstrap
            event.preventDefault();
        });
    }


    return {
        get: function () {
            return new BaseController();
        }
    }
}());