// ============================================================
// EXERCÍCIO 16 - NÍVEL 1: PESO IDEAL
// ============================================================
// Objetivo: Crie uma função que receba altura (em metros) 
// e sexo ('M' ou 'F') e retorne o peso ideal.
//
// Fórmulas:
// - Homem: (altura * 72.7) - 58
// - Mulher: (altura * 62.1) - 44.7
//
// Dicas:
// - Pense em condicional para verificar o sexo
// - Arredonde para 2 casas decimais
// ============================================================

function calcularPesoIdeal(altura, sexo) {
  if (sexo == 'M'){
   return  ((altura * 72.7) - 58).toFixed(2)
  } else if (sexo == 'F'){
    return ((altura * 62.1) - 44.7).toFixed(2)
  }
}

// Teste seu código:
 console.log(calcularPesoIdeal(1.75, 'M'));  // ~69.58
 console.log(calcularPesoIdeal(1.65, 'F'));  // ~58.04
