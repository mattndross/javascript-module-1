const students = [ 'Ma Victoria', 'Julian', 'Matías', 'Juan', 'Jesus'];
const otherStudents = ['Leo', 'Caleb', 'Daniel', 'Giomar']

const totalStudents = students.concat(otherStudents);

console.log(totalStudents.sort());

function isInTheClass (name, array) {
    if (array.includes(name)) {
        return `${name} is at the class with ${array.join(", ")}`
    } 
    return `${name} is not at the class with ${array.join(", ")}`
}

console.log(isInTheClass('Matías', students))
console.log(isInTheClass('Caleb', otherStudents))
console.log(isInTheClass('Jordi', totalStudents))
console.log(isInTheClass('Giomar', totalStudents))