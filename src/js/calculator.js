export default class Calculator {
  constructor(date) {
    this.date = date;
  }

  planetAge(currentDate) {
    const birthday = new Date(this.date);
    return ((currentDate - birthday) / 31536000000);
  }

  mercuryAge(currentDate) {
    return (this.earthAge(currentDate) / .24);
  }

  venusAge(currentDate) {
    return (this.earthAge(currentDate) / .62);
  }

  marsAge(currentDate) {
    return (this.earthAge(currentDate) / 1.88);
  }

  jupiterAge(currentDate) {
    return (this.earthAge(currentDate) / 11.86);
  }

  yearsToLive(planet, lifeExpectancy, currentDate) {
    switch (planet) {
      case "Earth":
        return lifeExpectancy - this.earthAge(currentDate);
      case "Mercury":
        return lifeExpectancy / .24 - this.mercuryAge(currentDate);
      case "Venus":
        return lifeExpectancy / .62 - this.venusAge(currentDate);
      case "Mars":
        return lifeExpectancy / 1.88 - this.marsAge(currentDate);
      case "Jupiter":
        return lifeExpectancy / 11.86 - this.jupiterAge(currentDate);
    }
  }

  yearsToLiveOutput(planet, lifeExpectancy, currentDate) {
    const years = this.yearsToLive(planet, lifeExpectancy, currentDate);
    const yearsOutput = Math.abs(years).toFixed(2);
    if (years < 0) {
      return `You have lived ${yearsOutput} years past your expected lifespan on ${planet}. Keep it up!`;
    } else {
      return `You have ${yearsOutput} years left to live on ${planet}. Make the most of it!`;
    }
  }
}