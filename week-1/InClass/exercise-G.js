const numberOfStudents = 13;
const numberOfMentors = 2;
const totalPeople = numberOfMentors + numberOfStudents;

const percentageOfStudents = Math.round((100 * numberOfStudents) / totalPeople);
const percentageOfMentors = Math.round((100 * numberOfMentors) / totalPeople);


console.log(`Percentage of students: ${percentageOfStudents}`);
console.log(`percentage of mentors: ${percentageOfMentors}`);