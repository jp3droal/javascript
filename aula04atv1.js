
let numeroAlunos = Number(prompt("Digite o número de alunos:"));
let somaNotas = 0;

for (let i = 1; i <= numeroAlunos; i++) {
    let nota = Number(prompt(`Digite a nota do aluno ${i}:`));
    somaNotas += nota;
}
let media = somaNotas / numeroAlunos;
console.log(`A média das notas dos ${numeroAlunos} alunos é: ${media}`);