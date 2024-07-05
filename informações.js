let corpo = document.querySelector("body")
let divisao = document.querySelector("div")

let nome = document.createElement("h1")
divisao.appendChild(nome)
nome.innerHTML = "João Pedro"

let lista = document.createElement("ul")
divisao.appendChild(lista)

let item1 = document.createElement('li')
lista.appendChild(item1)
item1.innerHTML = "18 anos"

let item2 = document.createElement('li')
lista.appendChild(item2)
item2.innerHTML = "rua pode cre 123"

let numeros = [1,2,3,4,5,6,7,8,9,10]

function montarTitulo(item, pai){
    let titulo = document.createElement('h1')
    titulo.innerHTML = item
    pai.appendChild(titulo)
}

numeros.forEach((num) => montarTitulo(num, divisao));
