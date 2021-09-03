import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

  let calculator;
  let currentDate;
   
  beforeEach(() => {
    calculator = new Calculator("1984-10-30", "Earth");
    currentDate = 1630685647903; //freezes current date with value of Date.now() on 9/3/2021.
  });

  test('should create a calculator object', () => {
    expect(calculator.date).toEqual("1984-10-30");
  });

  test('should calculate an orbital period based on the planet', () => {
    expect(calculator.orbitalPeriod()).toEqual(1);
  });

  test('should calculate Earth age from input', () => {
    planet = "Earth";
    expect(calculator.planetAge(currentDate)).toBeCloseTo(36.87);
  });

  test('should calculate age on any planet from input', () => {
    planet = "Mercury";
    expect(calculator.planetAge(currentDate, "Mercury")).toBeCloseTo(153.63);
    expect(calculator.planetAge(currentDate, "Venus")).toBeCloseTo(59.47);
    expect(calculator.planetAge(currentDate, "Mars")).toBeCloseTo(19.61);
    expect(calculator.planetAge(currentDate, "Jupiter")).toBeCloseTo(3.11);
    expect(calculator.planetAge(currentDate, "Saturn")).toBeCloseTo(3.11);
    expect(calculator.planetAge(currentDate, "Uranus")).toBeCloseTo(3.11);
    expect(calculator.planetAge(currentDate, "Neptune")).toBeCloseTo(3.11);
  });

  test('should calculate years to live on Earth from input', () => {
    expect(calculator.yearsToLive("Earth", 80, currentDate)).toBeCloseTo(43.13);
  });

  test('should calculate years to live on any planet from input', () => {
    expect(calculator.yearsToLive("Mercury", 80, currentDate)).toBeCloseTo(179.71);
    expect(calculator.yearsToLive("Venus", 80, currentDate)).toBeCloseTo(69.56);
    expect(calculator.yearsToLive("Mars", 80, currentDate)).toBeCloseTo(22.94);
    expect(calculator.yearsToLive("Jupiter", 80, currentDate)).toBeCloseTo(3.64);
  });

  test('should output a string describing how many years a person has left to live', () => {
    expect(calculator.yearsToLiveOutput("Earth", 80, currentDate)).toEqual("You have 43.13 years left to live on Earth. Make the most of it!");
  });

  test('should output a special string describing how many years a person has lived past their life expectancy', () => {
    calculator = new Calculator("1904-10-30");
    expect(calculator.yearsToLiveOutput("Earth", 80, currentDate)).toEqual("You have lived 36.93 years past your expected lifespan on Earth. Keep it up!");
  });
});