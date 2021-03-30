let pessoa = ['Vinicius', 22, 1.80, true, ['musica', 'cafe']]

console.log('-------------')
console.log(pessoa)
console.log(pessoa.length) //mede tamanho do array

console.log('.push()')
pessoa.push('Maria') //adiciona um elemento no fim
console.log(pessoa)
console.log(pessoa.length)

console.log('.pop()')
console.log(pessoa.pop()) //remove um elemento no fim
console.log(pessoa)
console.log(pessoa.length)

console.log('.shift()')
console.log(pessoa.shift()) //remove um elemento no inicio
console.log(pessoa)
console.log(pessoa.length)

console.log('.unshift()')
console.log(pessoa.unshift('Jose')) //adiciona um(ou mais) elementos no inicio
console.log(pessoa)
console.log(pessoa.length)

console.log('.join()')
let pessoaVirgula = pessoa.join() //junta todos os elemento usando o separador especificado, se nao colocar nada usa ,
console.log(pessoaVirgula)
let pessoaTraco = pessoa.join(' - ') 
console.log(pessoaTraco)

console.log('.indexOf()/.lastIndexOf')
pessoa.push('Jose')
console.log(pessoa.indexOf('Jose')) //busca o valor no array e retorna o index(posição) dele (do inicio para o fim)
console.log(pessoa.lastIndexOf('Jose')) //Mesmo do anterior, mas começa a contar do fim para o começo
console.log(pessoa.indexOf(20)) // caso não encontre retorna -1
console.log(pessoa)
pessoa.pop()

console.log('.includes()')
console.log(pessoa.includes('Jose')) //Verifica se o elemento existe no array e retorna true ou false
console.log(pessoa)

