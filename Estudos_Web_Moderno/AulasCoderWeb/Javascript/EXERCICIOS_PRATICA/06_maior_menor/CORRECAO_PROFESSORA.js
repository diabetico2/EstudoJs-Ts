// ============================================================
// CORREÇÃO DO EXERCÍCIO 06 - ENCONTRAR MAIOR E MENOR
// ============================================================

// SOLUÇÃO COM SPREAD OPERATOR:
function encontrarMaiorMenor(numeros) {
  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);
  return { maior, menor };
}

// OU SEM SPREAD OPERATOR (Manual):
function encontrarMaiorMenor_v2(numeros) {
  let maior = numeros[0];
  let menor = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) maior = numeros[i];
    if (numeros[i] < menor) menor = numeros[i];
  }
  
  return { maior, menor };
}

// OU COM .reduce():
function encontrarMaiorMenor_v3(numeros) {
  return numeros.reduce((res, num) => {
    return {
      maior: num > res.maior ? num : res.maior,
      menor: num < res.menor ? num : res.menor
    };
  }, { maior: numeros[0], menor: numeros[0] });
}

// ============================================================
// TESTE:
// ============================================================
console.log(encontrarMaiorMenor([5, 2, 8, 1, 9]));
// { maior: 9, menor: 1 }

console.log(encontrarMaiorMenor([100]));
// { maior: 100, menor: 100 }

// ============================================================
// PROBLEMA: Math.max/min COM ARRAYS
// ============================================================
// 
// Math.max([5, 2, 8]) ❌ ERRO! Retorna NaN
// Por quê? Porque Math.max espera NÚMEROS SOLTOS, não array
//
// Solução: O SPREAD OPERATOR (...)
// Math.max(...[5, 2, 8]) ✅ Funciona!
// Se torna: Math.max(5, 2, 8)
//
// ============================================================
// ENTENDENDO O SPREAD OPERATOR:
// ============================================================
// 
// [1, 2, 3] → expande para 1, 2, 3
// 
// Exemplos:
// Math.max(...[5, 2, 8])        → Math.max(5, 2, 8)
// console.log(...["a", "b"])    → console.log("a", "b")
// [...[1,2], ...[3,4]]          → [1, 2, 3, 4]
//
// ============================================================
// SHORTHAND PROPERTY (sintaxe moderna):
// ============================================================
// 
// { maior, menor } é igual a { maior: maior, menor: menor }
//
// Isso é apenas um atalho! Quando tem:
// const maior = 9;
// const menor = 1;
// { maior, menor }  ← Cria objeto com essas propriedades
//
// ============================================================
// COMPARAÇÃO DAS TRÊS ABORDAGENS:
// ============================================================
// 
// SPREAD OPERATOR:
// ✅ Mais conciso
// ✅ Mais direto
// ✅ Recomendado!
// ❌ Tecnicamente cria um novo escopo
//
// LOOP MANUAL:
// ✅ Não cria arrays desnecessários
// ✅ Performático
// ❌ Mais código
//
// .reduce():
// ✅ Funcional
// ✅ Uma linha
// ❌ Mais confuso
// ❌ Menos performático (cria objetos a cada iteração)
//
// ============================================================
// CASOS ESPECIAIS:
// ============================================================

// E se o array estiver vazio?
function encontrarMaiorMenorSegura(numeros) {
  if (numeros.length === 0) {
    return { erro: "Array vazio!" };
  }
  return { maior: Math.max(...numeros), menor: Math.min(...numeros) };
}

// E se houver números negativos?
console.log(encontrarMaiorMenor([-5, -2, -10]));
// { maior: -2, menor: -10 } ✅ Funciona perfeitamente

// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Math.max() e Math.min()
// ✅ Spread operator (...)
// ✅ Retornar múltiplos valores em um objeto
// ✅ Shorthand de objetos { maior, menor }
// ============================================================
