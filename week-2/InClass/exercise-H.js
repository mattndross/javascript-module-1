function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 5; i <= 20; i++) {

  const even = isEven(i);
  const expo = exponential(i);
  if (even) {
    console.log(`The exponential number of ${even} is ${expo}`);
  }
}


let num = 5;

while (num <= 20) {
  const even = isEven(num);
  const expo = exponential(num);
  if (even){
    console.log(`The exponential number of ${even} is ${expo}`)
  }
  num++;
}