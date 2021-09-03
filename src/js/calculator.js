export default class Calculator {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }
  
  earthAge(currentDate) {
    const birthday = new Date(this.year, this.month - 1, this.day);
    return parseFloat(((currentDate - birthday) / 31536000000).toFixed(2));
  }
}

