import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

  let calculator;

  beforeEach(() => {
    calculator = new Calculator("1984-10-30", "Earth", 1630685647903, 80);
    //freezes current date with value of Date.now() on 9/3/2021.
  });

  test('should create a calculator object', () => {
    expect(calculator.birthday).toEqual("1984-10-30");
    expect(calculator.planet).toEqual("Earth");
    expect(calculator.currentDate).toEqual(1630685647903);
    expect(calculator.lifeExpectancy).toEqual(80);
  });

  test('should calculate an orbital period based on the planet', () => {
    expect(calculator.orbitalPeriod()).toEqual(1);
    calculator.planet = "Mercury";
    expect(calculator.orbitalPeriod()).toEqual(.24);
    calculator.planet = "Venus";
    expect(calculator.orbitalPeriod()).toEqual(.62);
    calculator.planet = "Mars";
    expect(calculator.orbitalPeriod()).toEqual(1.88);
    calculator.planet = "Jupiter";
    expect(calculator.orbitalPeriod()).toEqual(11.86);
    calculator.planet = "Saturn";
    expect(calculator.orbitalPeriod()).toEqual(29.46);
    calculator.planet = "Uranus";
    expect(calculator.orbitalPeriod()).toEqual(84.02);
    calculator.planet = "Neptune";
    expect(calculator.orbitalPeriod()).toEqual(164.8);
  });

  test('should calculate Earth age from input', () => {
    expect(calculator.planetAge()).toBeCloseTo(36.87);
  });

  test('should calculate age on any planet from input', () => {
    calculator.planet = "Mercury";
    expect(calculator.planetAge()).toBeCloseTo(153.63);
    calculator.planet = "Venus";
    expect(calculator.planetAge()).toBeCloseTo(59.47);
    calculator.planet = "Mars";
    expect(calculator.planetAge()).toBeCloseTo(19.61);
    calculator.planet = "Jupiter";
    expect(calculator.planetAge()).toBeCloseTo(3.11);
    calculator.planet = "Saturn";
    expect(calculator.planetAge()).toBeCloseTo(1.25);
    calculator.planet = "Uranus";
    expect(calculator.planetAge()).toBeCloseTo(0.44);
    calculator.planet = "Neptune";
    expect(calculator.planetAge()).toBeCloseTo(0.22);
  });

  test('should calculate years to live on Earth from input', () => {
    expect(calculator.yearsToLive()).toBeCloseTo(43.13);
  });

  test('should calculate years to live on any planet from input', () => {
    calculator.planet = "Mercury";
    expect(calculator.yearsToLive()).toBeCloseTo(179.71);
    calculator.planet = "Jupiter"
    expect(calculator.yearsToLive()).toBeCloseTo(3.64);
  });
  
  test('should output a string describing how many years a person has left to live', () => {
    expect(calculator.planetAgeOutput()).toEqual("You are 36.87 Earth years old.");
  });

  test('should output a string describing their age in planet years.', () => {
    expect(calculator.yearsToLiveOutput()).toEqual("You have 43.13 years left to live on Earth. Make the most of it!");
  });


  test('should output a special string describing how many years a person has lived past their life expectancy', () => {
    calculator.birthday = "1904-10-30";
    expect(calculator.yearsToLiveOutput()).toEqual("You have lived 36.93 years past your expected lifespan on Earth. Keep it up!");
  });
});