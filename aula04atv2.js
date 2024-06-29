let inicio = 30
let final = 90

let repetições = 10
let contagemNumIntervalo = 0

for(let i = 1; i<= repetições; i++){
    let numero = Number(prompt("DIGITE UM NÚMERO"))

    if(numero < final && numero > inicio){
        contagemNumIntervalo +=1
    }
}

alert(`contagem dos números no intervalo ${contagemNumIntervalo}`)