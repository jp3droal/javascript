let senha = "senha"
let senhaUsuario = prompt("DIGITE SUA SENHA")
let tentativas = 3
let contagemTentativas = 1

if (senha == senhaUsuario) {
    console.log("ACESSOU SUA CONTA")
} 
else 
    while (senha != senhaUsuario && contagemTentativas <3) {
        senhaUsuario = prompt(`SENHA INCORRETA \n DIGITE SUA SENHA NOVAMENTE \n VOCÊ TEM ${tentativas - contagemTentativas} TENTATIVAS.`)
        
        if(senha == senhaUsuario){
            console.log("ACESSOU A SUA CONTA")

        }
        else{
            contagemTentativas +=1 
            alert("Você errou a senha!")
            console.log("Você errou a senha")
        }

        
    }    

