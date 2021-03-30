//if ternario
4 > 10 ? console.log('O 4 é maior') : console.log('O 10 é maior') //obrigatorio colocar o else. se não quisermos fazer nada usar ''

let dia = 'domingo'
let resultado = dia === 'domingo' ? 'Vou a praia' : 'Fico em casa'
console.log(resultado)


//Switch
let idade = 11

switch(idade)
{
    case 10:
    case 11: //neste caso estamos agrupando o 10 e o 11 por não usarmos o break
        console.log('Tem 10 ou 11 anos')
        break //usamos o break para finalizar a execução
    case 5:
        console.log('tem 5 anos')
        break
    default: //default não precisa do break
        console.log('Não tem 5 nem 10 anos')
}

