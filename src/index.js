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
    const bDayObj = new Calculator(birthday);
    let age;
    switch (planet) {
      case "Earth":
        age = bDayObj.earthAge(currentDate);
        break;
      case "Mercury":
        age = bDayObj.mercuryAge(currentDate);
        break;
      case "Venus":
        age = bDayObj.venusAge(currentDate);
        break;
      case "Mars":
        age = bDayObj.marsAge(currentDate);
        break;
      case "Jupiter":
        age = bDayObj.jupiterAge(currentDate);
    }
    $("#result").fadeIn();
    $("#age-output").text(`you are ${age} ${planet} years old.`)
    $("#ytl-output").text(bDayObj.yearsToLiveOutput(planet, lifeExpectancy, currentDate));
  });
});