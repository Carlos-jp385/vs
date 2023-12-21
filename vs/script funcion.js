
function sum(numeber1, numeber2) {
    console.log(numeber1 + numeber2)
}

sum(14, 15)

function sayMyName(name = 'Joao') {
    console.log(name)
}

sayMyName()








function sum(value, value2) {        //é uma funçao vazia (void)
    console.log(value + value2);
}

function sum(value, value2) {
    const result = value + value2
    return result
}

console.log(sum(50,20));