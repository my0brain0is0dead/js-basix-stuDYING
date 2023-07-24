// не работает

function hello() {
    console.log('Hello', this)
}
const person = {
    myName: 'Yan',
    age: 19,
    sayHello: hello,
    logInfo: function() {
        console.log(`Name is : ${this.myName}`)
        console.log(`I am ${this.age} years old`)
    }
}

person.logInfo
person.hello

/*
нихуя не понятно с этим контекстом и bindом, потом
как-нибудь разберусь

плюс не работает в браузере, ваще хуйня
*/