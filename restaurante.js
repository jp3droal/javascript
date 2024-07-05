let entrada = document.getElementById('entrada')
let pratoPrincipal = document.getElementById("pratoPrincipal")
let bebidas = document.getElementById("bebidas")
let sobremesa = document.getElementById("Sobremesa")
let subtotal = document.getElementById("Subtotal")
let taxaServico = document.getElementById("servico")
let total = document.getElementById("total")



function alteracao(){
    console.log("campo alterado")
}

function calcularConta(){
    let valorTotal = Number(entrada.value) + Number(pratoPrincipal.value) + Number(bebidas.value) + Number(sobremesa.value) 
    let valorTaxa = valorTotal * 0.1

    let totalAPagar = valorTotal + valorTaxa
    
    return [valorTotal,valorTaxa,totalAPagar]
}

function mostrarConta(){
    let valores = calcularConta()

    subtotal.value = valores[0]
    taxaServico.value = valores[1]
    total.value = valores[2].toFixed(2)
}