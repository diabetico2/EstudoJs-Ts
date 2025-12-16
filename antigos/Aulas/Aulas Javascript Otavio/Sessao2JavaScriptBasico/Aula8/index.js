/*
Allan José Pereira tem 21 anos, pesa 90 kg, tem 1.8 de altura e seu mc é de X
Allan José nasceu em 2004
*/
const primeiroNome = "Allan José";
const sobrenome = "Pereira";
const pesoAtual = 84;
const altura = 1.8;
const idade = 21;
let IMC; // ! peso / altura * altura
let anoNascimento;

IMC = (pesoAtual / (altura * altura));

console.log(`Allan José tem ${idade} anos, pesa ${pesoAtual}, tem ${altura} de altura, e seu IMC é de: ${IMC.toFixed(3)}, ele nasceu no ano de ${2025 -idade}`)