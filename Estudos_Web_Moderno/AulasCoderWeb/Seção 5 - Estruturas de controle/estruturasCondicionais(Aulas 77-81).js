//! ARQUIVO 1: ESTRUTURAS CONDICIONAIS (IF, ELSE, SWITCH)
//? Lógica que decide qual bloco de código executar.

// * Precisamos disso para usar o prompt no Node.js
const prompt = require('prompt-sync')();

// ==========================================================
// * IF, ELSE IF, ELSE (Para verificar intervalos ou condições)
// ==========================================================

// Pega um dado do usuário. Lembre-se que o prompt retorna string!
const idadeString = prompt("Digite sua idade: "); 
// Converte a string para número
const idade = Number(idadeString);

// * Exemplo 1: IF simples (Verifica só uma coisa)
if (idade >= 18) {
  console.log("É maior de idade.");
}

// * Exemplo 2: IF / ELSE (Verifica uma coisa e o seu oposto)
if (idade >= 18) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}

// * Exemplo 3: IF / ELSE IF / ELSE (Verifica múltiplas condições em cadeia)
if (idade < 12) {
  console.log("É uma criança.");
} else if (idade < 18) {
  console.log("É um adolescente.");
} else if (idade < 60) {
  console.log("É um adulto.");
} else {
  console.log("É um idoso.");
}


// ==========================================================
// * SWITCH (Para verificar valores exatos)
// ==========================================================
//? É bom para substituir um "if/else if" muito longo que só compara valores exatos.

const diaSemana = prompt("Digite um dia da semana (ex: 'segunda'): ");

switch (diaSemana.toLowerCase()) { // .toLowerCase() para evitar erros de case
  case 'segunda':
    console.log("Dia de começar a semana!");
    break; // ! O 'break' é crucial. Sem ele, o código "cai" para o próximo case.
  case 'sexta':
    console.log("Sextou!");
    break;
  case 'sabado':
  case 'domingo': // Pode "empilhar" cases
    console.log("Fim de semana!");
    break;
  default: // O 'default' é como o 'else', pega o que não foi coberto
    console.log("É um dia comum.");
    break;
}