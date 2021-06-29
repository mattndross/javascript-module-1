function getAgeInDays(age) {
    return age * 365;
}

function greetings(name, age) {
    const ageInDays = getAgeInDays(age);
    return `Hello ${name}, you are ${ageInDays} days old!`
}


console.log(greetings("Mara", 25));
console.log(greetings("Camilo", 59));
console.log(greetings("Marina", 73));


