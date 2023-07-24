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