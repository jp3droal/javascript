function somar(numero1, operação, numero2) {

let numero1 = Number(prompt("DIGITE O PRIMEIRO NUMERO"))
let operação = (prompt("DIGITE UMA DAS OPERAÇÕES: \n + soma \n  - subtração \n  * multiplicação \n / divisão \n ")) 
let numero2 = Number(prompt("DIGITE O SEGUNDO NUMERO"))

switch(operação) {
    
    case "+":
        resultado = numero1 + numero2
        console.log(resultado);
        alert(resultado);
        break;
    case "-":
        resultado = numero1 - numero2
        console.log(resultado);
        alert(resultado);
        break;
    case "*":
        resultado = numero1 * numero2
        console.log(resultado);
        alert(resultado);
        break;
    case "/":
        if (numero2 != 0) {
            resultado = numero1 / numero2
            console.log(resultado);
             alert(resultado);
             break;
             
        }
        else{
            console.log("Não é possível divisão por 0")
        }
        break;
       
        default:
            console.log("Operação inválida");
            break;
        
}

alert(`Resultado da operação ${resultado}` )
return resultado;


}

calculadora()