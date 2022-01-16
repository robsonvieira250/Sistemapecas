// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 100

// pesoPeca - Camel Case
// peso_peca - Snake Case
// PesoPeca - Pascal

if (pesoPeca > 100) {
    console.log ("Peso maior que 100g, podemos cadastrar a peça!!!")
} else {
    console.log ("Peso insuficiente, não é possivel cadastrar.")
}

let numeroPecas;

numeroPecas= 10;

if (numeroPecas < 10) {
    console.log ('Ainda há espaço na caixa, podemos cadastrar a peça')
} else{
    console.log ("Não há espaço disponivel na caixa")
}

let nomePeca = "Di"

//Verificar comprimento da palavra

console.log("O comprimento do nome da peça é:", nomePeca.length)

if (nomePeca.length < 3){
    console.warn ("Nome de peça muito curto, não é possivel cadastrar")
} else{
    console.log("Nome de peça adequado, podemos castrar ")
}


