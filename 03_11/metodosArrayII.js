//.map

var numeros = [2, 4, 6]

var dobroNumeros = numeros.map(function(num) //retorna um array percorrendo cada valor do array e modificando com a function informada
{
    return num * 2
})

//console.log(dobroNumeros)

//.find - retorna o primeiro elemento que cumprir o requisito da function
var frutas = ['Uva', 'Maçã', 'Cereja', 'Morango', 'Abacaxi']

var moraNoMar = frutas.find(function(fruta)
{
    return fruta === 'Abacaxi'
})

//console.log(moraNoMar)

//.filter - retorna uma nova array com todos os elementos que cumprirem a condição da function

var idades = [22, 8, 17, 14, 30]

var maiores = idades.filter(function(idade)
{
    return idade > 18
})

//console.log(maiores)

//.reduce
var numeros = [5, 7, 16]

var soma = numeros.reduce(function(pilha, numero) //a função de callback recebe um acumulador no primeiro valor e o segundo é os valores um a um do array
{
    return pilha + numero
})

//console.log(soma)

//.forEach - passa por cada valor do array, mas não retorna nada
var paises = ['Argentina', 'Brasil', 'Colombia']

paises.forEach(function(pais, indice) //indice é opcional e vai indicar a posição do elemento no array
{
    console.log(indice)
    console.log(pais)
})

