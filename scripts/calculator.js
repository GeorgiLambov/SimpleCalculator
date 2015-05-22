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
        // Handle button click
        $(selectorMain).on('click', 'button', function (event) {
            var input = $(this).attr('value');
            var display = $('#display').val();

            switch (input) {
                // 'C' will clear the input/output field
                case "clear": display = ''; break;
                // '=' will fetch the current expression string, evaluate it,
                // and write the result back into the input/output field
                case '=': try { display = eval(display); } catch (e) { display = 'ERROR'; } break;
                // 'CE' will delete the last character from the input/output field
                case '←': display = display.replace(/.$/, ''); break;
                // All other buttons will add a character to the input/output field
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