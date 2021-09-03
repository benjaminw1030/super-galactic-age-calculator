import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    const currentDate = Date.now();
    const birthday = $("#birthday").val();
    const planet = $("#planet").val();
    const lifeExpectancy = $("#life-expectancy").val();
    const age = new Calculator(birthday);
    $('#result').fadeIn();
    $('#ytl-output').text(age.yearsToLiveOutput(planet, lifeExpectancy, currentDate));
  });
});