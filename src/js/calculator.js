export default class Calculator {
  constructor(date, planet) {
    this.date = date;
    this.planet = planet;
  }

  orbitalPeriod() {
    switch (this.planet) {
      case "Mercury":
        return .24;
      case "Venus":
        return .62;
      case "Earth":
        return 1;
      case "Mars":
        return 1.88;
      case "Jupiter":
        return 11.86;
      case "Saturn":
        return 29.46;
      case "Uranus":
        return 84.02;
      case "Neptune":
        return 164.8;
    }
  }


  planetAge(currentDate) {
    const birthday = new Date(this.date);
    return ((currentDate - birthday) / 31536000000) / orbitalPeriod();
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
        return lifeExpectancy - this.planetAge(currentDate);
      case "Mercury":
        return lifeExpectancy / .24 - this.planetAge(currentDate);
      case "Venus":
        return lifeExpectancy / .62 - this.planetAge(currentDate);
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