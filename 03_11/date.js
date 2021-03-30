let minhaData = new Date() 
console.log( minhaData) //se não colocarmos argumentos sai com a data e hora do momento

//.getDate()
let diaDaMinhaData = minhaData.getDate()
console.log(diaDaMinhaData)

//.getMonth
let mesDaMinhaData = minhaData.getMonth()
console.log(mesDaMinhaData) //janeiro = 0 e dezembro = 11

//.getDay
let diaSemanaDaMinhaData = minhaData.getDay()
console.log(diaSemanaDaMinhaData)// domingo = 0 e sabado = 6

//getFullYear
let anoDaMinhaData = minhaData.getFullYear()
console.log(anoDaMinhaData)

//data dinamica
let minhaDataDeAniversario = new Date(1985, 11, 13) //podemos usar todos os outros metodos nesta data dinamica
console.log(minhaDataDeAniversario)
