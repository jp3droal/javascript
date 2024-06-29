let valorMinimo = 500
let valorDesconto = 1
let valorMaximoDesconto = 25
let valorAumentado = 100

for (let i = valorDesconto; i <=valorMaximoDesconto; i++){
    let valorFinal = valorMinimo - (valorMinimo * i /100)
    console.log(`Valor Compra: ${valorMinimo} - ${i}% - Valor Final: ${valorFinal}`)
    valorMinimo += valorAumentado   
}
    
