/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function getAges(arr){ //filters the given array so it returns only the numbers
  return arr.filter(item => typeof(item) === 'number');  
}

const random = ['otro', 89, 34, 30, 'vlavl', 34, 23, 17, 50, 23, '10', 25, null] //A random array to test my functions
//console.log(getAges(random))


/* I'm trying differents algorithms that sort numbers. 
I found them in this medium:
https://medium.com/@anny.huynh32/sorting-algorithm-e3f06c735dfb */


function bubbleSort(arr) {   //Bubble sort algorithm 
  const ages = getAges(arr);

  for (let j = 0; j < ages.length; j++) {
    for (let i = 0; i < ages.length; i++) {
      if (ages[i] > ages[i + 1]) {
        const t = ages[i];
        ages[i] = ages[i + 1];
        ages[i + 1] = t;
      }
    }
  }
  return ages
}
console.log(bubbleSort(random))

function selectionSort(arr) { // Selection sort algorithm
  const ages = getAges(arr);  

  for (let i = 0; i < ages.length; i++) {
    let smallest = ages[i]
    let swaper = null;
    for (let j = i + 1; j < ages.length; j++) {
        if (smallest > ages[j]) {
          swaper = smallest;
          smallest = ages[j];
          ages[j] = swaper;
      }
    }
    
    ages[i] = smallest;
    
  }
  return ages
}
console.log(selectionSort(random))

function sortAges(arr) { // insertion sort algorithm
  let ages = getAges(arr);

  for (let i = 0; i < ages.length; i++) {
    let current = ages[i];
    for (let j = 1; j <= i; j++){
      let comparator = ages[i-j];
      if (current < comparator) {        
         ages[i -j +1] = comparator;
         ages[i - j] = current
      }      
    }
  }
  return ages
}

function 
//console.log(insertionSort(random))
/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);
