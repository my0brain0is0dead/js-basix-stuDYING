const userProfile = {
    myName: 'Yan',
    commentsQty: 24,
    hasSignedAgreement: false,
}

const {name, commentsQty} = userProfile
const {hasSignedAgreement} = userProfile

//я видел такое в каком-то проекте, там было что-то типо
//{id, login, password} = props а пропсы были переданы в функцию извне
//кароче штука полезная

const fruits = ['Apple', 'Orange', 'Lemon']
const [one, two] = fruits

console.log(one)
console.log(two)

const userInfo = (props) => {
    const {myName, commentsQty} = props
    if (!commentsQty) {
        console.log(`User ${myName} has no comments`)
    }
    return console.log(`User ${myName} has ${commentsQty} comments`)
}
userInfo(userProfile)

//передача пропсов в функцию, но можно делать по другому

const userInfo1 = ({myName, commentsQty}) => {
    if (!commentsQty) {
        console.log(`User ${myName} has no comments`)
    }
    return console.log(`User ${myName} has ${commentsQty} comments`)
}
//можно вот так прям в объявлении функции разложить на переменные
userInfo1(userProfile)