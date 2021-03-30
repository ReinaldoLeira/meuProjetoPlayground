let carro = {
	nome: 'Fox',
	ano: 2012,
    ligar: function()
    {
        console.log('o carro ' + this.nome + ' está ligado')
    }
}

//console.log(carro.nome)
//console.log(carro)

//carro.ligar()  //chamar a função dentro do objeto

function Carro2(nomeCarro, anoCarro) //sempre usarletra maiuscula na função contrutora
{
    this.nome = nomeCarro
    this.ano = anoCarro
}

let civic = new Carro2('Civic', '2019') //criando objeto literal chamado civic com a estrutura construtora
let gol = new Carro2('Gol', '2017') //criando objeto literal chamado gol com a estrutura construtora

console.log(civic)
console.log(gol)