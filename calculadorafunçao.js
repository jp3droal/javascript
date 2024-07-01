function somaIntervalo (inicio=0, final=0){
let soma = 0

for (let i = inicio; i <= final; i++){
    soma += i
}

return soma


}
let soma1a100 = somaIntervalo(1,100)

console.log(soma1a100)

