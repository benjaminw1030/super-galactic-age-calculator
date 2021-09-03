import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

$(document).ready(function () {
  $('#calculator-form').submit(function (event) {
    event.preventDefault();
    const currentDate = Date.now();
    const birthday = $("#birthday").val();
    const planet = $("#planet").val();
    const lifeExpectancy = $("#life-expectancy").val();
    const bDayObj = new Calculator(birthday, planet, currentDate, lifeExpectancy);
    $("#planet-img").html("<img class='rounded' src='assets/images/"+ planet + ".jpg' alt" + planet + ">");
    $("#age-output").text(bDayObj.planetAgeOutput());
    $("#ytl-output").text(bDayObj.yearsToLiveOutput());
    $(".planet").hide();
    $(`#${planet}`).show();
    $("#result").fadeIn();
  });
});