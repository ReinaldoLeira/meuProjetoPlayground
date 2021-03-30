let dobro = a2 => a2 * 2   //arrow function com 1 parametro não precisa de () no mesmo e quando for com uma linha não precisa de return
console.log(dobro(5))


const somar = (a, b) => {return a + b}
console.log(somar(5, 7))


const arrowFunction = () => {
    console.log('Estou em uma arrow function')
}
arrowFunction()


let horaAtual = () => {
    let data = new Date()
    return data.getHours() + ' : ' + data.getMinutes()
}
console.log(horaAtual())

