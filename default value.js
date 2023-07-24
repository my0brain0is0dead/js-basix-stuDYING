function someFn(value, multiplier = 1) {
    return value * multiplier
}
console.log(someFn(10, 2))
console.log(someFn(6))

const someDivider = function (value, divider = 1) {
    return value / divider
}
console.log(someDivider(6, 2))

const power = (value, power = 1) => value ** power
console.log(power(3, 7))

// новый синтаксис ({}) - неявный возврат объекта
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    i: 1,
    author: 'Yan',
}

console.table(newPost(firstPost))

//  явный возврат объекта
const createNewPost = (post, addedAt = Date()) => {
    const zxc = {
        ...post,
        addedAt
    }
    return zxc
}

console.table(createNewPost(firstPost))