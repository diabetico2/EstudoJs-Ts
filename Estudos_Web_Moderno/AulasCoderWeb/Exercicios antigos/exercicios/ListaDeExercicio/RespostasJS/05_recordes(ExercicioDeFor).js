const prompt = require('prompt-sync')();

// 05) Dada uma lista de pontuacoes, retorne quantas vezes bateu o recorde e o pior jogo.
function avaliarPontuacao(stringPontuacoes) {
    // Transforma a string em vetor de números
    let pontuacoes = stringPontuacoes.split(" ").map(Number);
    
    let quebraRecorde = 0;
    let piorJogo = 1;
    
    // Inicializa maior e menor com a PRIMEIRA pontuação
    let maior = pontuacoes[0];
    let menor = pontuacoes[0]; 

    // O loop deve começar do índice 1 (segundo jogo), pois o primeiro já definimos acima
    // CORREÇÃO: 'length' estava escrito errado ('legth')
    for(let i = 1; i < pontuacoes.length; i++) {
        
        let pontuacaoAtual = pontuacoes[i];

        if(pontuacaoAtual > maior) {
            maior = pontuacaoAtual; // Atualiza o novo recorde
            quebraRecorde++;
        } 
        // Se não bateu recorde, verifica se foi o pior jogo
        // CORREÇÃO: Comparar com 'menor', não com 'maior'
        else if (pontuacaoAtual < menor) {
            menor = pontuacaoAtual; // Atualiza a menor pontuação
            piorJogo = i + 1; // Guarda o número do jogo (índice + 1)
        }
    }
    
    // CORREÇÃO: Retornar o piorJogo no segundo item
    return [quebraRecorde, piorJogo];
}

// Testando com o exemplo do exercício
console.log(avaliarPontuacao("10 20 20 8 25")); 
// Resultado esperado: [3, 4] 
// (Bateu recorde no 20, no 20(não conta), e no 25? 
//  Obs: 10 -> 20 (Recorde 1). 20 -> 20 (Empate, não quebra). 20 -> 8 (Pior jogo). 8 -> 25 (Recorde 2).
//  Espera-se recordes batidos: 20 e 25 (Total 2) ou dependendo da interpretação.