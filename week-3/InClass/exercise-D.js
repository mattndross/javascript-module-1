function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray)
  
    return magicOutput;
  }

 const newFunction = arr => arr.map(name => name.toUpperCase()).sort()
  function myFunction(arr) { 
     return arr.map(name => name.toUpperCase()).sort() 
}




  console.log(magician(myFunction))