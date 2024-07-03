//mostre no console o nome da pessoa e quanto ela recebe em umm texto formatado, para todos os itens do array,com uma string formatada.

let pessoas = [
    {
        nome: 'joao',
        cargo: 'açougueiro',
        salario: 2450,
        gratificação: 300,
        idade: 29
    },
    {
        nome: 'sara',
        cargo: 'caixa',
        salario: 3200,
        gratificação: 400,
        idade: 22
    },
    {
        nome: 'lopes',
        cargo: 'gerente',
        salario:4000,
        gratificação: 700,
        idade: 32
    },
    {
        nome: 'otavio',
        cargo: 'repositor',
        salario:  1150,
        gratificação: 400,
        idade: 19
    },
    {
        nome:'maria',
        cargo: 'empacotador',
        salario: 2150,
        gratificação: 400,
        idade: 19
    }
]


pessoas.forEach((item)=>console.log(`${item.nome} recebe R$${(item.salario)+(item.gratificação)}`))

let gratificaçoes = pessoas.map((pessoas)=>pessoas.gratificação)
let somaGratificaçoes = gratificaçoes.map((pessoas)=>pessoas * 2)
console.log(somaGratificaçoes) 

let salarioAlto = pessoas.filter((item)=>{
if (item.salario >= 4000) {
    return item
}
})
console.log(salarioAlto)


