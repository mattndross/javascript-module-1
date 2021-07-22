
birthYearsArr = [2004, 2000, 2006, 1993, ];

function getAgesOfWhoCanDrive(birthYears) {
    return `This are the birth years of people who can drive ${birthYears.filter(birthYear => 2021 - birthYear >= 17)}`
}

console.log(getAgesOfWhoCanDrive(birthYearsArr))