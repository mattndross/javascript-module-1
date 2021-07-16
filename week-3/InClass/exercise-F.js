function canDrive(year){
    if (2021 - year > 16) {
        return `born in ${year} can drive`
    }

    return `born in ${year} can drive in ${17 - (2021 - year)} years`
}

const birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

let arrayCanDrive = birthYears.map(year => 2021 - year > 16 ? `born in ${year} can drive` : `born in ${year} can drive in ${17 - (2021 - year)} years`);

arrayCanDrive = birthYears.map(canDrive);



console.log(arrayCanDrive);
