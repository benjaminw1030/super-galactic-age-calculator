import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    const birthday = new Calculator(date);
    $('#response').append("<p>" + response + "</p>");
  });
});