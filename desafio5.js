let  numUser = Number(prompt(`Digite o 1º número:`))  
let numMaior = numUser
let numMenor = numUser
let quantidadeNum = 10

for (let i = 2; i <= quantidadeNum-1; i++) {
    
    if (numUser>numMaior) {
        numMaior = numUser
    }
    else if(numUser < numMenor ){
        numMenor = numUser
    }

    if (i < 11) {
        numUser = Number(prompt(`Digite o ${i}º número:`))
    }
 
    

}