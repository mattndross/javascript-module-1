agesArr = [70, 12, 45, 18, 17, 3]

function getAgesOfWhoCanDrive(ages) {
    return `This are the birth years of people who can drive ${ages.filter(ages => age >= 17)}`
}

console.log(getAgesOfWhoCanDrive(agesArr))