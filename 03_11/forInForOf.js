//let...in
var pessoa = {
    nome: 'Guilherme',
    idade: 23
}
for(let dados in pessoa) //let...in passa por cada propriedade do objeto
{
    console.log(dados, pessoa[dados]) 
}

//let...of
var musicos = ['Vinicius', 'Tom', 'João'] // passa por cada elemento do array/string

for(let musico of musicos)
{
    console.log(musico)
}

//while - verifica e depois executa
let contador = 0
while(contador < 10)
{
    console.log(contador)
    contador++
}

//do... while -executa e depois verifica
do{
    console.log(contador)
    contador--
}while(contador > 0)