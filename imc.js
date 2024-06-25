let peso = Number(prompt("Digite aqui seu peso"))
let altura = Number(prompt("Digite aqui sua altura"))


let calculo = peso / (altura * altura)

if(isNaN(calculo)){
    console.log("Algum dos valores pedidos foi informado como texto")

}
else if( calculo < 18.5){
    console.log(calculo)
    console.log("Abaixo do peso esperado")
    alert("Abaixo do peso esperado")
}
else if( calculo >= 18,5 && calculo < 25){
    console.log(calculo)
    console.log("Seu peso está normal")
    alert("Seu peso está normal")
}
else if( calculo >= 25 && calculo < 30 ){
    console.log(calculo)    
    console.log("Você está acima do peso esperado")
    alert("Você está acima do peso esperado")
}
else{
    console.log(calculo)
    console.log("Você está obeso")
    alert("Você está obeso")
}



