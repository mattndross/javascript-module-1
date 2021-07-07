function validateUser(userName, typeOfUser) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (typeOfUser === "admin" || typeOfUser === "manager") {
    return "username valid";
  } else {
    for (let i = 0; i < vowels.length; i++) {
      if (userName[0].toUpperCase() === vowels[i].toUpperCase()) {
        if (userName.length > 4 && userName.length < 11) {
          return "username valid";
        }
      }
    }
  }
  return "username invalid";
}

console.log(validateUser('arnau', 'normal'));
console.log(validateUser('Osv', 'Admin'));
console.log(validateUser('Osvald', 'Admin'));
console.log(validateUser('upermixtonicanmetro', 'normal'));
console.log(validateUser('tourcat', 'normal'));
console.log(validateUser('pepe', 'admin'));
