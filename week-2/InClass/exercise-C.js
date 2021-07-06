function numberChecker(num) { //takes a number as a parameter
  if (num > 20) { 
    return `${num} is greater than 20`; // if the number is greater to 20 returns the message
  } else if (num === 20) {
    return `${num} is equal to 20`;  ç7
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}