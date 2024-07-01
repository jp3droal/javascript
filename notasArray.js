function notas(){
let notas = []
for (let i = 1; i <=3; i++){
    notas[i-1] = Number(prompt(`DIGITE A ${i}º NOTA`))
}

notas[notas.length] = (notas[0] + notas[1] + notas[2]) / notas.length

return notas
}

//let arrayNotas = (notas())
//arrayNotas.push()

let arrayNotas = [1,2,3]
arrayNotas.push("B")

let excluido = arrayNotas.pop()

arrayNotas.unshift("inicio")
arrayNotas.shift()
