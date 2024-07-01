function dizerOiRecife(nome){
    console.log(`${nome}, eiii boy!`)
}
function dizerOiFortaleza(nome){
    console.log(`${nome}, eiii mahh!`)
}
function dizerOiSalvador(nome){
    console.log(`${nome}, eiii pivete!`)
}

function falarCidade(nome, funcao){
    funcao(nome)
}

falarCidade(`Cleitinho`, dizerOiRecife)
falarCidade(`Cleitinho`, dizerOiSalvador)
falarCidade(`Cleitinho`, dizerOiFortaleza)
