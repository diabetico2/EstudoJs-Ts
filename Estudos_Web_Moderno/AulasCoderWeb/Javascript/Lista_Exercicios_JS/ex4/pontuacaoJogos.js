// Função: Recebe uma string de pontuações e retorna
// quantas vezes o recorde foi quebrado e qual foi o pior jogo.
// Parâmetros: ponts (String) — ex: "10 20 20 8 25 3 0 30 1"
// Retorno: Array [recordeQuebrado, piorJogo]
function pontuacao(ponts) {
  const pontosFormatados = ponts.split(" ");
  let maiorPontuacao = Number(pontosFormatados[0]);
  let menorPontuacao = Number(pontosFormatados[0]);
  let recordeQuebrado = 0;
  let piorJogo = 1;

  for (let i = 1; i < pontosFormatados.length; i++) {
    let pontoAtual = Number(pontosFormatados[i]);
    if (pontoAtual > maiorPontuacao) {
      maiorPontuacao = pontoAtual;
      recordeQuebrado++;
    } else if (pontoAtual < menorPontuacao) {
      menorPontuacao = pontoAtual;
      piorJogo = i + 1;
    }
  }
  return [recordeQuebrado, piorJogo];
}

// Exemplo de uso
console.log(pontuacao("10 20 20 8 25 3 0 30 1"));
