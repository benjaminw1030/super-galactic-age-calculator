export default class Calculator {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }
  
  earthAge(currentDate) {
    const birthday = new Date(this.year, this.month - 1, this.day);
    return ((currentDate - birthday) / 31536000000);
  }

  mercuryAge(currentDate) {
    return (this.earthAge(currentDate)/.24);
  }

  venusAge(currentDate) {
    return (this.earthAge(currentDate)/.62);
  }

  marsAge(currentDate) {
    return (this.earthAge(currentDate)/1.88);
  }

  jupiterAge(currentDate) {
    return (this.earthAge(currentDate)/11.86);
  }

  yearsToLive(planet, lifeExpectancy, currentDate) {
    switch (planet) {
      case "Earth":
        return lifeExpectancy - this.earthAge(currentDate);
      case "Mercury":
        return lifeExpectancy/.24 - this.mercuryAge(currentDate);
      case "Venus":
        return lifeExpectancy/.62 - this.venusAge(currentDate);
      case "Mars":
        return lifeExpectancy/1.88 - this.marsAge(currentDate);
      case "Jupiter":
        return lifeExpectancy/11.86 - this.jupiterAge(currentDate);
    }
  }
  yearsToLiveOutput(planet, lifeExpectancy, currentDate) {
    const years = this.yearsToLive(planet, lifeExpectancy, currentDate).toFixed(2);
    return `You have ${years} years left to live on ${planet}. Make the most of it!`;
  }
}