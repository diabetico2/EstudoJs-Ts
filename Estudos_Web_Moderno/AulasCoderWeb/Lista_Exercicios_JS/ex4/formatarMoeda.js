// Função: Formata números como moeda brasileira (R$) com duas casas decimais.
// Parâmetros: valor (Number)
// Retorno: String — valor formatado, ex: "R$ 0,30"
function corrige(valor) {
  const valorFormat = valor.toFixed(2).replace('.', ',');
  return `R$ ${valorFormat}`;
}

// Exemplo de uso
console.log(corrige(0.30000000000000004)); // R$ 0,30
