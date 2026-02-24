// Função: Imprime números ímpares entre `min` e `max`.
// Parâmetros opcionais: min (Number, default 0), max (Number, default 100)
// Observação: Se min > max, os valores são trocados automaticamente.
function contaImpar(min = 0, max = 100) {
  if (min > max) {
    // Troca de valores usando desestruturação — sem variável temporária
    [min, max] = [max, min];
  }
  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Exemplo de uso
contaImpar(10, 1);
