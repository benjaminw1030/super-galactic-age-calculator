import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

  let calculator;
  let currentDate;
  
  beforeEach(() => {
    calculator = new Calculator(10, 30, 1984);
    currentDate = 1630685647903; //freezes current date value at current time with value of Date.now() on 9/3/2021.
  });

  test('should create a calculator object', () => {
    expect(calculator.month).toEqual(10);
    expect(calculator.day).toEqual(30);
    expect(calculator.year).toEqual(1984);
  });

  test('should calculate Earth age from input', () => {
    expect(calculator.earthAge(currentDate)).toBeCloseTo(36.87);
  });

  test('should calculate Mercury age from input', () => {
    expect(calculator.mercuryAge(currentDate)).toBeCloseTo(153.62);
  });

  test('should calculate Venus age from input', () => {
    expect(calculator.venusAge(currentDate)).toBeCloseTo(59.47);
  });

  test('should calculate Mars age from input', () => {
    expect(calculator.marsAge(currentDate)).toBeCloseTo(19.61);
  });

  test('should calculate Jupiter age from input', () => {
    expect(calculator.jupiterAge(currentDate)).toBeCloseTo(3.11);
  });

  test('should calculate years to live on Earth from input', () => {
    expect(calculator.yearsToLive("Earth", 80, currentDate)).toBeCloseTo(43.13);
  });

  test('should calculate years to live on any planet from input', () => {
    expect(calculator.yearsToLive("Mercury", 80, currentDate)).toBeCloseTo(3.64);
    expect(calculator.yearsToLive("Venus", 80, currentDate)).toBeCloseTo(3.64);
    expect(calculator.yearsToLive("Mars", 80, currentDate)).toBeCloseTo(3.64);
    expect(calculator.yearsToLive("Jupiter", 80, currentDate)).toBeCloseTo(3.64);
  });
});