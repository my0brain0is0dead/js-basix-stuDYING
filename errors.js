const fnWithError = () => {
    throw new Error('Some error')
}

/*fnWithError()
console.log('Continue...')*/

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}
console.log('Continue...')

/*
не знаю как это можно использовать, что за ошибки
и как их понимать

нужны примеры использования
*/
