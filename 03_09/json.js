let pessoa = {
    nome: 'vinicius',
    idade: 21,
    altura: 1.80
}

let json = JSON.stringify(pessoa) //transforma o objeto literal para o formato JSON(string)

console.log(json)

let objetoDeNovo = JSON.parse(json) //transforma o texto JSON em formato de objeto

console.log(objetoDeNovo)