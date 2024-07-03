//let frutas = ["maça", "uva","banana"]
//let numeros = [1,2,3,4] 

//frutas.forEach((FRUTA)=>console.log(FRUTA.toUpperCase()))

//console.log(frutas)

//let numerosDobro = numeros.map((num)=>num*2)

//construir um array de 4 objetos. Cada objeto terá as seguintes chaves: nome,nota, Sendo a nota entre 0 e 10.
let numeros = [1,2,3,4]


let alunos =[
    {
        nome: 'ana',
        nota:8,
        
    },
    {
        nome : 'paulo',
        nota: 10,
    },
    {
        nome: 'Maria',
        nota:5,
    },
    {
        nome:'José',
        nota: 7
    },
]


//montar um array de objetos, contendo apenas os aprovados(nota > 7)



let alunosAprovados = alunos.filter((alunos)=>{
if (alunos.nota >=7) {
    return (alunos.nome)
}
})

let notaAprovados = alunosAprovados.map((elemento)=> elemento.nota)
let somaAprovados = notaAprovados.reduce((soma,num)=>soma +=num,)


console.log(somaAprovados)