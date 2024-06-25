const nomeTitular = "JOAO PEDRO"
let senha = 'senha12345678910'
let entradaSenha = prompt("DIGITE SUA SENHA")
let saldo = Number(2.500)


if (senha == entradaSenha){
    let escolha = Number( prompt("ESCOLHA UMA OPÇÃO \n 1.DEPÓSITO \n 2.SAQUE \n 3.SALDO"))
    switch (escolha) {
        case "1":
            let deposito = Number(prompt("QUAL VALOR VOCÊ GOSTARIA DE DEPOSITAR?"))
            saldo += deposito
            console.log("SEU VALOR FOI DEPOSITADO")
            console.log(`O SALDO ATUAL DA CONTA É DE R$ ${saldo}`)
            break;
    
        case "2":
            let saque = Number(prompt("QUANTO VOCÊ DESEJA RETIRAR?"))
            if (saldo >= saque) {
                saldo -= saque
                console.log("SEU SAQUE FOI FEITO")
            } else {
                console.log("SALDO INSUFICIENTE") 
            }
            break;
    
         case "3":
            console.log(`O SALDO ATUAL DA CONTA É R$ ${saldo}`)
            break;
    
        default:
            console.log("OPÇÂO INVÁLIDA")
            break;
    }
}else{
    console.log("SENHA INCORRETA")
}




