let a
let b

function someFn() {
    let b
    a = true
    b = 'string'
    console.log(b) // 'string'
}

someFn()
console.log(a) // true
console.log(b) // undefined 

/*
кароче, сначала js смотрит в текущую область видимости, если переменная там объявлена
то именно с ней и будут происходить изменения в рамках функции. если она не объявлена, 
то js смотрит в глобальную область видимости, и когда он там находит переменную,
он работает уже с ней.
console.log смотрит в своей области видимости, находит там переменную и выводит её
значение в консоль.
*/

const c = 6
function myFn() {
    function innerMyFn() {
        console.log(c)
    }
    innerMyFn() // 6
}

myFn() // undefined