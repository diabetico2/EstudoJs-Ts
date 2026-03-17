// ARQUIVO 1: ESTRUTURAS CONDICIONAIS (if, else if, else, switch)

const prompt = require('prompt-sync')();

console.log('=== if / else if / else ===');

const idade = Number(prompt('Digite sua idade: '));

if (Number.isNaN(idade)) {
  console.log('Valor invalido. Digite um numero.');
} else {
  // if simples
  if (idade >= 18) {
    console.log('E maior de idade.');
  }

  // if/else
  if (idade >= 18) {
    console.log('Pode dirigir.');
  } else {
    console.log('Nao pode dirigir.');
  }

  // if/else if/else
  if (idade < 12) {
    console.log('Faixa etaria: crianca.');
  } else if (idade < 18) {
    console.log('Faixa etaria: adolescente.');
  } else if (idade < 60) {
    console.log('Faixa etaria: adulto.');
  } else {
    console.log('Faixa etaria: idoso.');
  }
}

console.log('\n=== switch ===');

const diaSemana = prompt("Digite um dia da semana (ex: 'segunda'): ")
  .trim()
  .toLowerCase();

switch (diaSemana) {
  case 'segunda':
    console.log('Inicio de semana.');
    break;
  case 'sexta':
    console.log('Sextou.');
    break;
  case 'sabado':
  case 'domingo':
    console.log('Fim de semana.');
    break;
  default:
    console.log('Dia comum ou valor nao reconhecido.');
}