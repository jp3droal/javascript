//crie um array com 5 produtos.
//cada produto deve ser um objeto com as propriedades nome,preço, cor, tamanho e disponibilidade
//crie um metodo calcularDesconto que recebe um número e retorna o preço com desconto
//crie um metodo alterar disponibilidade. Se a disponibilidade estiver true, altere para false e vice-versa


let produtos = []


        


for(let i = 1; i<=5; i++){

    let nome =  prompt("DIGITE AQUI O NOME DO PRODUTO")
    let preco = Number(prompt("DIGITE AQUI O PREÇO DO PRODUTO"))
    let cor = (prompt("DIGITE AQUI A COR DO PRODUTO"))
    let tamanho = (prompt("DIGITE AQUI O TAMANHO DO PRODUTO"))
    let disponibilidade = (prompt("O PRODUTO ESTÁ DISPONIVEL?"))
    
}

let produto = [{
    nome: nome,
    preco : preco,
    cor : cor,
    tamanho : tamanho,
    disponibilidade : disponibilidade,
    calcularDesconto: function(desconto = 0){
    return produto.preco*(1-desconto/100)
    },
    alterarDisponibilidade : function(){
        if(produto.disponibilidade){
            produto.disponibilidade = false
        }else{
            produto.disponibilidade = true
        }
    }

}]