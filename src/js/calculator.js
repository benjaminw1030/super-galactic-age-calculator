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
    }
  }
}

