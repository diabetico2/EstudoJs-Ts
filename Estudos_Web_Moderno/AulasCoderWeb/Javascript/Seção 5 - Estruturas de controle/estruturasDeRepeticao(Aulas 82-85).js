// ARQUIVO 2: ESTRUTURAS DE REPETICAO (LOOPS)

console.log('=== for ===');
// Use quando ja sabe quantas repeticoes quer fazer.
for (let i = 0; i < 5; i++) {
  console.log(`FOR -> ${i}`);
}

console.log('\n=== while ===');
// Use quando depende de uma condicao e o total de repeticoes pode variar.
let contador = 0;
while (contador < 5) {
  console.log(`WHILE -> ${contador}`);
  contador++;
}

console.log('\n=== do...while ===');
// O bloco executa primeiro e valida a condicao depois.
let valor = 10;
console.log('Antes:', valor);

do {
  console.log('Executou ao menos uma vez.');
  valor++;
} while (valor < 5);

console.log('Depois:', valor);
