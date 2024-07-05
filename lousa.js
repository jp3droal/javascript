let btnVermelho = document.getElementsByTagName('button')[0]
let btnVerde = document.getElementsByTagName('button')[1]
let btnAzul= document.getElementsByTagName('button')[2]

let quadro = document.querySelector('.quadro')

function mudarCor(cor){
    quadro.style.background = cor
}

let elementoFilho = document.createElement('p')
elementoFilho.innerHTML = "texto inserido no innerhtml de um paragrafo criado com o create element do objeto document"
let elementoPai = document.querySelector("body")

elementoPai.appendChild(elementoFilho)

let outroElementoFilho = document.createElement("h1")

outroElementoFilho.innerHTML = 'NOVO TITULO'

elementoPai.appendChild(outroElementoFilho)

elementoPai.innerHTML += outroElementoFilho