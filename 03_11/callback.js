const somar = (numeroA, numeroB) => numeroA + numeroB //função criada para fazer callback

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB) //função calculadora que chama a função somar

console.log(calculadora(10, 20, somar)) //Aqui se coloca os parametros necessarios e a função que sera chamada no callback sem () para só ser executada quando chamada

console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA - numeroB)) //exemplo de callback usando uma função anonima


