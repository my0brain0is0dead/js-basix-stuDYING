const awesomeFunction = () => {
    let sum = 1
    return new Promise (resolve => {
        sum = 1 + 'some string'
        // ... делаю дела
        resolve()
    })

};

const printFunction = () => {
    console.log('okyroq')
};

awesomeFunction().then(printFunction)

let promise = new Promise (function(resolve, reject) {
    resolve("Разрешение промиса");
    reject(new Error("Отколнение промиса")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
});
