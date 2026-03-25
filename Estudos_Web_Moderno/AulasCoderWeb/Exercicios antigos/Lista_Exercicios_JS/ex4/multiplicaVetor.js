// Função: Multiplica todos os elementos de um vetor por um número fornecido.
// Parâmetros: vetor (Array de Number), numero (Number)
// Retorno: novo array com valores multiplicados
function multis(vetor, numero) {
  const numeroDobro = vetor.map(function (elemento) {
    return elemento * numero;
  });

  return numeroDobro;
}

// Exemplo de uso
const valoresAleatorios = [1, 4, 5, 7, 10];
const multiplicador = 2;
const vetorMultiplicado = multis(valoresAleatorios, multiplicador);
console.log(vetorMultiplicado); // [ 2, 8, 10, 14, 20 ]
