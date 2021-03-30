let nome = 'Fran'
console.log(nome[3]) //Javascript vê um string como um array de caracteres, então cada caracterer é uma pocição. Aqui exibe 'n'

//.length e .indexOf() pode ser usado em strings

let frase = 'Breaking Bad Rules!'
console.log(frase.slice(9, 12)) //retorna 'Bad' pois pega do caracter 9 até a 12
frase.slice(13) //retorna 'Rules!' pois pega do caracter 13 em diante
frase.slice(-10) //retorn 'Bad Rules!' pois pega os 10 ultimos caracteres da string

let nomeCompleto = '   Homer Simpson   '
console.log(nomeCompleto.trim()) //Remove os espaços no inicio e no fim da string, mas não mexe nos espaços no meio

let musica = 'And bingo was his name, oh'
console.log(musica.split(' ')) //Divide a string em um array usando a string que passarmos como separador. Caso não coloque nada como parametro e transforma em um array com apenas um elemento

let frase2 = 'Força, Python!'
console.log(frase2.replace('Python', 'JS')) //Substritui os caracteres do parametro 1('Python') pelos caracteres do parametro 2('JS')
console.log(frase2.replace('Pyth', 'JS'))

