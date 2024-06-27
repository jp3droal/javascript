let somaNotas = 0
let media 

let i = 1

//media aritmetica
for (; i <= 4; i++) {
    somaNotas += Number(prompt(`Digite a nota nº ${i}`))    
    
}



media = somaNotas /(i - 1)

console.log(`Sua média é ${media}`)
//media ponderada

media = 0
somaNotas = 0
pesos = 0

for (; i <=4 ; i++){
    if ( i == 4 || i == 2) {
        somaNotas += (Number(prompt(`Digite a nota nº ${i}`)) *2) 
        pesos +=2
        
    }
        else if(i == 0){
            somaNotas += (Number(prompt(`Digite a nota nº ${i}`)) *3) 
            pesos +=3
           
        }

    else {
        somaNotas += Number(prompt(`Digite a nota nº ${i}`))   
        pesos +=1
    }
    
    media = somaNotas / pesos

}
