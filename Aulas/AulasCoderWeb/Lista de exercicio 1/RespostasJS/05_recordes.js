function avaliarPontuacao(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(" ").map(Number);
    let quebraRecorde = 0;
    let piorJogo = 1;
    let maior = pontuacoes[0];
    let menor = pontuacoes[0];

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maior) { maior = pontuacoes[i]; quebraRecorde++; }
        else if (pontuacoes[i] < menor) { menor = pontuacoes[i]; piorJogo = i + 1; }
    }
    return [quebraRecorde, piorJogo];
}
console.log(avaliarPontuacao("10 20 20 8 25 3 0 30 1"));
