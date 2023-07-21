const okyroq = {
    title: 'abobaq',
    index: 3,
    someStatus: {
        zxc: true
        },
    myFunc() {
        console.log('papa')
    }
}
const okyroqStringified = JSON.stringify(okyroq)
console.log(okyroqStringified)

const okyroq2 = JSON.parse(okyroqStringified)
console.log(okyroq2)

// функции не передаются в json, что логично впринципе