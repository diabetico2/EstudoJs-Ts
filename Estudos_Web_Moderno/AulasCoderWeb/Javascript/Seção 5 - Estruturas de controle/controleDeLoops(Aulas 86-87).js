// ARQUIVO 3: CONTROLE DE LOOPS (for...in, break, continue)

console.log('=== for...in ===');
// for...in percorre as chaves de um objeto.
const pessoa = {
  nome: 'Allan',
  idade: 21,
  profissao: 'Estudante'
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('\n=== break ===');
// break encerra o loop na hora.
for (const num of numeros) {
  if (num === 5) {
    console.log('Encontrei 5. Encerrando loop.');
    break;
  }

  console.log(num);
}

console.log('\n=== continue ===');
// continue pula para a proxima iteracao.
for (const num of numeros) {
  if (num % 2 === 0) {
    continue;
  }

  console.log(num);
}