let nome = prompt("Digite seu nome:");
let salarioNormal = Number(prompt("Digite seu salário normal:"));
let tempoEmpresa = Number(prompt("Digite seu tempo de empresa: \n 1. menos de 1 ano \n 2. entre 1 e 2 anos \n 3. de 2 a 5 anos \n 4. de 5 a 10 anos \n 5.mais de 10 anos"));
let dependentes = Number(prompt("Digite o número de dependentes menos que 7 anos"));


switch (tempoEmpresa) {
    case 1:
        salarioAdicional = salarioNormal;
        break;
    case 2:
        salarioAdicional = salarioNormal * 0.05;
        break;
    case 2:
        salarioAdicional = salarioNormal * 0.1;
        break;
    case 3:
        salarioAdicional = salarioNormal * 0.15; 
        break;
    case 4:
        salarioAdicional = salarioNormal * 0.2; 
        break;
    default:
        salarioAdicional = salarioNormal;
        break;
}




console.log(`O salário total de ${nome} é: ${salarioAdicional}`);
