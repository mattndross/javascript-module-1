/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const capitalFirstLetter = str[0].toUpperCase();
  const strTail = str.slice(1, str.length)
  return capitalFirstLetter.concat(strTail);
}

function capitaliseFirstLetter(str) {
  const firstLetter = str[0].toUpperCase().split("");
  const arrayTail = str.split("")
  .slice(1, str.length);
  const arr = firstLetter.concat(arrayTail)
  return arr.join("")
}

const 
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));
console.log(capitaliseFirstLetter(name));
console.log(capitaliseFirstLetter("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
