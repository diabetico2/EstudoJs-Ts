// ============================================================
// CORREÇÃO DO EXERCÍCIO 05 - SOMAR ARRAY
// ============================================================

// SOLUÇÃO COM .reduce():
function somarArray(numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

// OU COM NOMES MAIS DESCRITIVOS:
function somarArray_v2(numeros) {
  return numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);
}

// OU COM LOOP MANUAL:
function somarArray_v3(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

// ============================================================
// TESTE:
// ============================================================
console.log(somarArray([1, 2, 3, 4, 5]));        // 15
console.log(somarArray([10, 20, 30]));           // 60
console.log(somarArray([]));                     // 0

// ============================================================
// ENTENDENDO .reduce()
// ============================================================
// 
// .reduce((acumulador, elementoAtual) => {...}, valorInicial)
//
// Fluxo passo a passo para [1, 2, 3, 4, 5]:
// 
// Iteração 1: acc=0, num=1 → 0+1=1
// Iteração 2: acc=1, num=2 → 1+2=3
// Iteração 3: acc=3, num=3 → 3+3=6
// Iteração 4: acc=6, num=4 → 6+4=10
// Iteração 5: acc=10, num=5 → 10+5=15
// Resultado: 15
//
// ============================================================
// POR QUE .reduce() E NÃO .forEach()?
// ============================================================
// 
// .forEach(callback) - executa mas não retorna nada útil
// .reduce(callback) - acumula em um resultado final
//
// Pense em "reduzir" um array a um único valor
// Soma = reduz [1, 2, 3, 4, 5] para 15
//
// ============================================================
// O SEGUNDO PARÂMETRO (valorInicial):
// ============================================================
// 
// .reduce(callback, 0)  ← 0 é o valor inicial
//
// POR QUE É IMPORTANTE?
// - Define o tipo do acumulador (número, neste caso)
// - Se não colocar, usa primeiro elemento como inicial
// - Array vazio retorna erro se não tiver valor inicial
//
// Exemplo:
console.log([1,2,3].reduce((a,b) => a+b));    // 6 (ok, a=[1])
console.log([].reduce((a,b) => a+b));         // ERRO!
console.log([].reduce((a,b) => a+b, 0));      // 0 (ok!)

// ============================================================
// OUTRAS OPERAÇÕES COM .reduce():
// ============================================================

// Multiplicar todos:
function multiplicarArray(numeros) {
  return numeros.reduce((acc, num) => acc * num, 1);
}
console.log(multiplicarArray([2, 3, 4])); // 24

// Encontrar máximo:
function encontrarMaximo(numeros) {
  return numeros.reduce((max, num) => num > max ? num : max);
}
console.log(encontrarMaximo([5, 2, 8, 1, 9])); // 9

// Contar ocorrências:
function contarLetraA(texto) {
  return texto.split('').reduce((count, letra) => {
    return letra === 'a' ? count + 1 : count;
  }, 0);
}
console.log(contarLetraA("banana")); // 3

// ============================================================
// COMPARAÇÃO: .reduce() vs LOOP MANUAL
// ============================================================
// 
// LOOP MANUAL:
// ✅ Mais explícito
// ✅ Mais fácil de debugar no início
// ❌ Mais código
// ❌ Mais propenso a erros
//
// .reduce():
// ✅ Mais conciso
// ✅ Mais "funcional"
// ✅ Parece complicado no início, mas é poderoso!
// ❌ Pode ser confuso inicialmente
//
// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Array.reduce() - a função MAIS importante!
// ✅ Acumuladores
// ✅ Valor inicial de reduce
// ============================================================
