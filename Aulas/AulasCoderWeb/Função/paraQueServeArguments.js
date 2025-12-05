function soma() {
  // ==========================================================
  // ? O que é o 'arguments'?
  // ==========================================================
  // * 'arguments' é um objeto especial, "array-like" (parecido com um array),
  // * que existe AUTOMATICAMENTE dentro de funções criadas com a
  // * palavra-chave 'function'.
  //
  // * Ele contém todos os valores (argumentos) que foram passados
  // * para a função quando ela foi chamada, na ordem em que foram passados.
  //
  // * Exemplo: Se você chamar soma(10, 20, 30)
  // * O 'arguments' será um objeto parecido com: { '0': 10, '1': 20, '2': 30 }
  //
  // ! O 'arguments' NÃO é um Array de verdade.
  //   - Ele tem a propriedade .length (ex: arguments.length)
  //   - Você pode acessar os itens por índice (ex: arguments[0], arguments[1])
  //   - Mas ele NÃO tem métodos de array como .map(), .filter(), .forEach(), etc.
  //
  // ! Ele NÃO EXISTE em Arrow Functions (funções =>).
  //   (Esse é um dos motivos pelos quais as funções de seta são diferentes).
  // ==========================================================

  let soma = 0;

  // ? O 'for...in' (que você viu na aula 86) itera sobre as CHAVES (os índices '0', '1', '2').
  // ? Por isso, para pegar o VALOR, precisamos usar 'arguments[i]'.
  for (let i in arguments) {
    soma += arguments[i]; // Pega o valor que está no índice 'i'
  }

  // * Uma forma mais moderna (e melhor) seria usar o 'for...of' (aula 85)
  // * O 'for...of' itera sobre os VALORES (10, 20, 30).
  //
  // for (let valor of arguments) {
  //   soma += valor;
  // }

  return soma;
}

// Graças ao 'arguments', sua função agora é flexível!
console.log(`soma(1, 2, 3) = ${soma(1, 2, 3)}`);
console.log(`soma(10, 20, 30, 40, 50) = ${soma(10, 20, 30, 40, 50)}`);
console.log(`soma(5) = ${soma(5)}`);
console.log(`soma() = ${soma()}`);