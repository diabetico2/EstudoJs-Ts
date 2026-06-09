/* =======================================================================
   🏆 DESAFIO: A Máquina de Sorteios
   =======================================================================

   O Contexto:
   Criar a lógica de um sorteio assíncrono que demora um tempo para processar 
   e pode ter dois resultados: o usuário ganha ou perde.

   As Regras do Código:

   1. Crie uma função chamada `sortearPremio()` que não recebe parâmetros 
      e retorna uma `new Promise`.

   2. Dentro da Promise, use um `setTimeout` para criar um atraso de 
      3 segundos (3000ms).

   3. Após os 3 segundos, gere um número aleatório entre 1 e 10.
      (Dica: Use Math.random() multiplicado pelo limite e arredonde).

   4. A Lógica da Sorte:
      - Se o número sorteado for PAR (numero % 2 === 0), a promessa deve 
        ser CUMPRIDA (resolve) com a string: "Você ganhou um Carro!".
      - Se o número sorteado for ÍMPAR, a promessa deve ser REJEITADA 
        (reject) com a string: "Que azar, não foi dessa vez...".

   5. A Execução: 
      - Chame a função `sortearPremio()`.
      - Use o `.then()` para receber a frase de vitória, concatenar com 
        " Parabéns!!!" e exibir no console.log.
      - Use o `.catch()` para capturar o erro (rejeição) e exibir a 
        frase de azar no console.log.
   ======================================================================= */
function sortearPremio() {
  return new Promise((resolve, reject) => {
    const fator = 10 - 1 + 1;
    let aleatorio = parseInt(Math.random() * fator);

    setTimeout(() => {
      if (aleatorio % 2 === 0) {
        resolve (`Parabens, você ganhou ${aleatorio}`)
      } else {
        reject (`Que pena, você Perdeu ${aleatorio}`)
      }
    }, 3000);
  });
}
sortearPremio().then(console.log).catch(console.log)