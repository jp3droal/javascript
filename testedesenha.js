let senha = "senha"
let senhaUsuario = prompt("DIGITE SUA SENHA")
let tentativas = 3

if (senha == senhaUsuario) {
    console.log("Caminho feliz")
} 
else 
    while (tentativas) {
     if (senhaUsuario != senha) {
        console.log("DIGITE NOVAMENTE")
    }    
}