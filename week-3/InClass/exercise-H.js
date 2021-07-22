namesArr = ['Nicolas', 'Mariano', 'Esperanza', 'Romina'];
namesArr2 = ['Nicolas', 'Mariano', 'Esperanza', 'Romina', 'Matías'];

function findMyName(names) {
    if (names.find(name => name === 'Matías')) {
        return 'Found me!'
    } else {
        return 'Haven\'t found me :('
    }
}

console.log(findMyName(namesArr))
console.log(findMyName(namesArr2))