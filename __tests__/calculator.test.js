import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

  let calculator;

  beforeEach(() => {
    calculator = new Calculator(10, 30, 1984);
  });

  test('should create a calculator object', () => {
    expect(calculator.month).toEqual(10);
    expect(calculator.year).toEqual(30);
    expect(calculator.month).toEqual(1984);
  });
});