const precoOriginal = 129.90;
const percentualDesconto = 15;

//! Dica 1: Nomes de variáveis mais descritivos
//  A variável "percentual" guarda, na verdade, o valor do desconto em reais, não o percentual.
//  Um nome como "valorDoDesconto" deixa instantaneamente claro o que a variável armazena.
const valorDoDesconto = precoOriginal * (percentualDesconto / 100);

const precoFinal = precoOriginal - valorDoDesconto;

// * O uso do .toFixed(2) está perfeito para formatar o valor monetário.

//! Dica 2: Saída de dados mais completa usando Template String
//  Em vez de uma frase simples, que tal usar o que você aprendeu na Tarefa 1 para dar um feedback completo ao usuário?
//  Fica muito mais profissional.
console.log(`
  //--------------------------------
  //    CÁLCULO DO DESCONTO
  //--------------------------------
  // Preço Original: R$ ${precoOriginal.toFixed(2)}
  // Desconto a aplicar: ${percentualDesconto}%
  // Valor do Desconto: R$ ${valorDoDesconto.toFixed(2)}
  // Preço Final: R$ ${precoFinal.toFixed(2)}
  //--------------------------------
`);