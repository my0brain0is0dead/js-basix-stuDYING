//чтобы не повторять куски кода можно использовать функции
//именованая функция
function summation(a, b) {
    const c = a + b
    return c
}


let someA = 13
let someB = 5
let sum1 = summation(someA, someB)
console.log(sum1)

someA = 20
someB = 543
let sum2 = summation(someA, someB)
console.log(sum2)

const Bob = {
    age: 25
}

//изменение объекта
function incrementPersonAge (person) {
    person.age++
    return person
}

console.log(Bob.age)

//изменение копии 
function incrementCopyAge (person) {
    const updatedPerson = { ...person }
    updatedPerson.age++
    return updatedPerson    
}

const updatedBob = incrementCopyAge(Bob)
console.log(updatedBob.age)

// функциональное выражение (анонимная функция)
// обычно используется в качестве колбэк функции

const zxc = function(a, b) {
    const c = summation(a, b)
    return c
}

console.log(zxc(76, 22))

// стрелочная функция

const son = (pipi, pupu, check) => {
    const multiply = pipi * pupu * check
    return multiply
}

console.log(son(2, 65, 9128))