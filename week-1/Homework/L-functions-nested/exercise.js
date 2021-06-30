const numberOfStudents = 13;
const numberOfMentors = 2;
const totalPeople = numberOfMentors + numberOfStudents;

function percentageOf(group) {
    return Math.round((100 * group) / totalPeople);
}

function message(group, groupName) {
    return `The ${percentageOf(group)}% of the group are ${groupName}`    
}

console.log(message(numberOfStudents, "students"));
console.log(message(numberOfMentors, "mentors"));