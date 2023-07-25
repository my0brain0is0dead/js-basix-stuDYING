const myArray = [1, 2, 3, 4,]
console.log(myArray)

const myArray2 = new Array(1, 2, 3, 4,)
console.log(myArray2)

console.log(myArray === myArray2)
/*
каждый из массивов ссылается на разные объекты в памяти, поэтому они не равны
хоть в них и одинаковые свойства
это означает что массив является объектом ссылочного типа
*/

const myObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}

console.log(myObject)
console.log(myArray)

//основные методы массива

myArray.push(5) //добавляет элемент в конец массива
console.log(myArray)

let removedElem = myArray.pop() //вырезает последний элемент в массиве и возвращает его
console.log(myArray)
console.log(removedElem)

myArray.unshift(0) //добавляет элемент в начало массива
console.log(myArray)

let removedFirst = myArray.shift() //вырезает первый элемент массива
console.log(myArray)
console.log(removedFirst)

myArray.forEach(el => console.log(el * 2)) //применяет функцию к каждому элементу массива
const newArray = myArray.map((el) => el * 4) //применяет функцию к каждому элементу массива и при этом возвращает новый массив
console.log(newArray)
console.log(myArray) //при map оригинальный массив не меняется 
