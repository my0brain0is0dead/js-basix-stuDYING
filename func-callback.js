function someFunction () {
    //Действия
}

function fnWithCallback (callbackFunction) {
    callbackFunction()
}

fnWithCallback(someFunction)


function printMyName() {
    console.log('ynccq')
} 
setTimeout(printMyName, 5000)

/*
я чувствую что у этого есть куча хороших приминений
но ни одного я пока придумать не могу

возможно есть какая-то встроенная функция которая кетчит ошибки
и в ней колбэком вызывается другая, и если ошибка найдена то выдается 
сообщение об ошибке
*/