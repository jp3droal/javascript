//atributos = senha, agencia/ numero da conta/ titular/ tipo(PJ OU PF)/ saldo
//valores = senha - string/ agencia - number/ numero da conta - number/ titular - string/ tipo(PJ ou PF) - string/ saldo - number
//metodos basicos = sacar/depositar/emprestimo/saldo




let conta = {
    titular: 'joao',
    numerodaconta: 12122,
    agencia : 1231,
    pfpj : 'pf',
    saldo : 1000,
    senha : 1234,
    emprestimo :[],
    
    
    sacar:function(valor){
        if(senha == conta.senha){
        
        if (conta.saldo >= valor) {
            conta.saldo -= valor
            console.log("Saque realizado com sucesso")
        }
        else{
            console.log("Saldo Insuficiente")
        }
    }else{
        console.log("Senha Incorreta")
    }
    },
    depositar: function(valor, senha){
        if(senha == conta.senha){
        conta.saldo += valor
        console.log("Deposito realizado com sucesso")
        }else{
            console.log("Sua senha está incorreta!")
        }
    },
    consultarSaldo:function(senha){
        if(senha == conta.senha){
        console.log(`Saldo: R$ ${conta.saldo}`)
        }else{
            console.log("Sua senha está incorreta!")
        }
    },
    fazerEmprestimo: function(valor,senha){
        if(senha == conta.senha){

            let juros = 0.02
            let quantidadeParcelas = 24
            let parcela = (valor / quantidadeParcelas )*(1 + juros)
            conta.saldo += valor
            let informaçõeEmprestimo = [valor, quantidadeParcelas, parcela, juros]
            conta.emprestimo.push(informaçõeEmprestimo)
            console.log(`Emprestimo de R$${valor} concedido. O saldo atual da conta é ${conta.saldo}`)
        }else{
         console.log("Sua senha está errada!!")
        }
    }

}

