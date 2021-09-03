export default class Calculator {
  constructor(birthday, planet, currentDate, lifeExpectancy) {
    this.birthday = birthday;
    this.planet = planet;
    this.currentDate = currentDate;
    this.lifeExpectancy = lifeExpectancy;
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

  planetAge() {
    const birthdayObj = new Date(this.birthday);
    const birthdayNum = birthdayObj.valueOf();
    return ((this.currentDate - birthdayNum) / 31536000000) / this.orbitalPeriod();
  }

  yearsToLive() {
    return (this.lifeExpectancy / this.orbitalPeriod()) - this.planetAge(this.currentDate);
  }

  planetAgeOutput() {
    const ageOutput = this.planetAge().toFixed(2);
    return `You are ${ageOutput} ${this.planet} years old.`
  }

  yearsToLiveOutput() {
    const years = this.yearsToLive();
    const yearsOutput = Math.abs(years).toFixed(2);
    if (years < 0) {
      return `You have lived ${yearsOutput} years past your expected lifespan on ${this.planet}. Keep it up!`;
    } else {
      return `You have ${yearsOutput} years left to live on ${this.planet}. Make the most of it!`;
    }
  }
}