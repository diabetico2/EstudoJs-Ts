// ============================================================
// CORREÇÃO DO EXERCÍCIO 04 - FILTRAR PARES
// ============================================================

// SOLUÇÃO COM .filter():
function filtrarPares(numeros) {
  return numeros.filter(num => num % 2 === 0);
}

// OU SEM ARROW FUNCTION (mais longo):
function filtrarPares_v2(numeros) {
  return numeros.filter(function(num) {
    return num % 2 === 0;
  });
}

// OU COM LOOP MANUAL:
function filtrarPares_v3(numeros) {
  const pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}

// ============================================================
// TESTE:
// ============================================================
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));     // [2, 4, 6]
console.log(filtrarPares([1, 3, 5, 7]));            // []
console.log(filtrarPares([2, 4, 6, 8]));            // [2, 4, 6, 8]

// ============================================================
// ENTENDENDO O MÓDULO (%)
// ============================================================
// 
// O operador % retorna o RESTO da divisão
// 
// 5 % 2 = 1  (5 ÷ 2 = 2 resto 1)
// 4 % 2 = 0  (4 ÷ 2 = 2 resto 0) ← Número PAR!
// 7 % 2 = 1  (7 ÷ 2 = 3 resto 1)
// 8 % 2 = 0  (8 ÷ 2 = 4 resto 0) ← Número PAR!
//
// Por isso: num % 2 === 0 significa PAR
//
// ============================================================
// ENTENDENDO .filter()
// ============================================================
// 
// .filter(callback) testa CADA elemento
// Se callback retorna true, mantém
// Se callback retorna false, remove
//
// array.filter(num => num % 2 === 0)
// ↓
// Para 1: 1 % 2 === 0? Não → Remove
// Para 2: 2 % 2 === 0? Sim → Mantém
// Para 3: 3 % 2 === 0? Não → Remove
// Para 4: 4 % 2 === 0? Sim → Mantém
// Resultado: [2, 4]
//
// ============================================================
// COMPARAÇÃO DAS ABORDAGENS:
// ============================================================
// 
// ✅ .filter() é:
//    - Mais legível
//    - Mais funcional
//    - Mais curto
//    - Recomendado!
//
// ✅ Loop manual é:
//    - Mais explícito
//    - Mais controle
//    - Útil se precisar de efeitos colaterais
//
// ============================================================
// VARIAÇÕES ÚTEIS:
// ============================================================

// Filtrar ÍMPARES:
function filtrarImpares(numeros) {
  return numeros.filter(num => num % 2 !== 0);
}

// Filtrar MAIORES que valor:
function filtrarMaiorQue(numeros, valor) {
  return numeros.filter(num => num > valor);
}

// Filtrar MENORES que valor:
function filtrarMenorQue(numeros, valor) {
  return numeros.filter(num => num < valor);
}

console.log(filtrarImpares([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(filtrarMaiorQue([1, 5, 3, 7, 2], 3)); // [5, 7]

// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Array.filter() e como funciona
// ✅ Operador módulo (%)
// ✅ Identificar pares e ímpares
// ============================================================
