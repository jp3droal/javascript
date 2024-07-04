let nome = document.getElementById("nome")
let peso = document.querySelector("#peso")
let altura = document.getElementById("altura")
let resposta = document.querySelector("#resultado")

function calcularIMC(){
    let nomeUser = nome.value
    let pesoUser = Number(peso.value)
    let alturaUser = Number(altura.value)
    let imc = pesoUser / alturaUser**2

    resposta.innerHTML = `<p>${nomeUser}, seu IMC é de: ${imc.toFixed(2)}</p>`
}