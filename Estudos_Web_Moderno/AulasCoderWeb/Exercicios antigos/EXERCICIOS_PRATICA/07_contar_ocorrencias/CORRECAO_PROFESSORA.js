// ============================================================
// CORREÇÃO DO EXERCÍCIO 07 - CONTAR OCORRÊNCIAS
// ============================================================

// SOLUÇÃO A: COM .filter()
function contarOcorrencias_v1(array, elemento) {
  return array.filter(x => x === elemento).length;
}

// SOLUÇÃO B: COM .reduce()
function contarOcorrencias_v2(array, elemento) {
  return array.reduce((count, x) => x === elemento ? count + 1 : count, 0);
}

// SOLUÇÃO C: COM LOOP MANUAL
function contarOcorrencias_v3(array, elemento) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) count++;
  }
  return count;
}

// ============================================================
// TESTE:
// ============================================================
const arr = [1, 2, 3, 2, 2, 4];

console.log(contarOcorrencias_v1(arr, 2));  // 3
console.log(contarOcorrencias_v2(arr, 2));  // 3
console.log(contarOcorrencias_v3(arr, 2));  // 3

// ============================================================
// EXPLICAÇÃO PASSO A PASSO - SOLUÇÃO A (.filter())
// ============================================================
// 
// array.filter(x => x === elemento)
// ↓
// [1, 2, 3, 2, 2, 4].filter(x => x === 2)
// ↓
// Testa cada: 1===2? Não. 2===2? Sim. 3===2? Não. 2===2? Sim. ...
// ↓
// Resultado: [2, 2, 2]
// ↓
// .length → 3
//
// ============================================================
// EXPLICAÇÃO PASSO A PASSO - SOLUÇÃO B (.reduce())
// ============================================================
// 
// array.reduce((count, x) => x === 2 ? count + 1 : count, 0)
// ↓
// Iteração 1: count=0, x=1 → 1===2? Não → count=0
// Iteração 2: count=0, x=2 → 2===2? Sim → count=1
// Iteração 3: count=1, x=3 → 3===2? Não → count=1
// Iteração 4: count=1, x=2 → 2===2? Sim → count=2
// Iteração 5: count=2, x=2 → 2===2? Sim → count=3
// Iteração 6: count=3, x=4 → 4===2? Não → count=3
// ↓
// Resultado: 3
//
// ============================================================
// COMPARAÇÃO:
// ============================================================
// 
// SOLUÇÃO A (.filter()):
// ✅ Mais legível
// ✅ Cria array intermediário [2, 2, 2]
// ❌ Usa MAIS memória (cria novo array)
//
// SOLUÇÃO B (.reduce()):
// ✅ Mais eficiente em memória
// ✅ Não cria arrays extras
// ❌ Menos legível
//
// SOLUÇÃO C (Loop manual):
// ✅ Mais explícito
// ✅ Máximo controle
// ✅ Eficiente
// ❌ Mais código
//
// ============================================================
// QUAL USAR?
// ============================================================
// 
// Para CONTAR: Recomendo .reduce() ou loop manual
// Para FILTRAR: Use .filter() para visualizar
//
// Na prática:
// - Se precisa dos ELEMENTOS → .filter()
// - Se precisa só da CONTAGEM → .reduce() ou loop
//
// ============================================================
// CASOS ESPECIAIS:
// ============================================================

// Contar strings (case-insensitive):
function contarOcorrenciasTexto(array, elemento) {
  return array.filter(x => 
    x.toLowerCase() === elemento.toLowerCase()
  ).length;
}

console.log(contarOcorrenciasTexto(['João', 'joão', 'JOÃO'], 'joão')); // 3

// Contar com múltiplos elementos:
function contarTodos(array, elementos) {
  return elementos.map(el => ({
    elemento: el,
    quantidade: contarOcorrencias_v1(array, el)
  }));
}

console.log(contarTodos([1, 2, 2, 3, 3, 3], [1, 2, 3]));
// [
//   { elemento: 1, quantidade: 1 },
//   { elemento: 2, quantidade: 2 },
//   { elemento: 3, quantidade: 3 }
// ]

// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Array.filter() + .length para contar
// ✅ Array.reduce() para acumular contagem
// ✅ Quando usar cada abordagem
// ============================================================
