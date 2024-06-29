
    let vezes = 0;
  
    for (let numero = 1; vezes < 5; numero++) {
     novoNumero = Number(prompt("DIGITE SEU NUMERO"))
      if (numero % 3 === 0) {
        console.log(numero);
        alert(numero);
        vezes++;
      }
    }
  
 