let fila = [`Mario, Ana, Julio, Joana, Pedro, Maria, Clara,Yago, Kiko, Cleitinho`]
let atendidos = []
let atendimentoAmanha = []

for(let i = 1; i<=3; i++ ){
    let ultimo = fila.shift()
    atendidos.unshift(ultimo) 
}

let novoTamanhoFila = fila.length

for(let i = 1; i<=novoTamanhoFila ; i++){
    let proximo = fila.shift()
    atendimentoAmanha.push(proximo)
}

let numeros = [1,2,3]

function multiplicar(num){
    return num**2
}

let numerosAoQuadrado = numeros.map((item)=>multiplicar(item))
console.log(numeros)
console.log(numerosAoQuadrado)