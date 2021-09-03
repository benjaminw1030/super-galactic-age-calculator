import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator(10, 30, 1984);
  });

  test('should create a calculator object', () => {
    expect(calculator.month).toEqual(10);
    expect(calculator.day).toEqual(30);
    expect(calculator.year).toEqual(1984);
  });

  test('should calculate earth age from input', () => {
    const currentDate = 1630685647903 //freezes current date value at current time with value of Date.now();
    expect(calculator.earthAge(currentDate)).toBeCloseTo(36.87);
  });
  test('should calculate mercury age from input', () => {
    const currentDate = 1630685647903
    expect(calculator.mercuryAge(currentDate)).toBeCloseTo(153.62);
  });

});