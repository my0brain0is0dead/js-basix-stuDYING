//copy by value
const someA = 10
let someB = someA
someB = 30

console.log(someA)
console.log(someB)


const person = {
    name: 'ynccq',
    age: 22
}
//copy by reference
const person2 = person
person2.age = 55
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)

//assigning (из-за наследования вложенные ссылки на оригинальный объект сохраняются)
const person3 = Object.assign({}, person)
person3.age = 40

console.log(person3.age)
console.log(person.age)

//spreading (разделение на свойства и сборка по свойствам)
const person4 = {...person}
person4.name = 'okyroq'

console.log(person4.name)
console.log(person.name)

//JSONing (не сохраняет методы и ссылки на вложеные объекты)
const person5 = JSON.parse(JSON.stringify(person))
person5.age = 404

console.log(person5.age)
console.log(person.age)

