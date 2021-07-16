function getAge(year) {
    return 2021 - year;
}

const ArrayOfYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];


const getArrayOfAges = ArrayOfYears.map(year => 2021 - year);

console.log(getArrayOfAges)