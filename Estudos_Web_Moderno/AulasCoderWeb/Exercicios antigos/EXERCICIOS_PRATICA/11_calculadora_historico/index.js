// ============================================================
// EXERCÍCIO 11 - NÍVEL 4: CALCULADORA COM HISTÓRICO
// ============================================================
// Objetivo: Crie um objeto calculadora que:
// - Tenha propriedade _historico (array vazio)
// - Tenha um método "calcular(a, operador, b)" que:
//   - Faz a operação
//   - GUARDA no histórico em formato: "5 + 3 = 8"
// - Tenha um getter "historico" que retorna todas as operações
// - Operadores: +, -, *, /, %
//
// CAMINHO DE RACIOCÍNIO:
// 1. Como você escolhe QUAL operação fazer? (depende do operador)
// 2. Após calcular, você ARMAZENA no histórico
// 3. O histórico é uma string que mostra: a op b = resultado
// 4. Como você adiciona à um array?
// 5. GETTER retorna todo o histórico
//
// DOCUMENTAÇÃO:
// - Switch statement: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
// - Array.push(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// - Template literals: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
//
// EXEMPLO DO CONCEITO:
// switch: testa um valor e executa código diferente por caso
// Histórico: precisa guardar TODAS as operações feitas
// Cada operação é: "numero1 operador numero2 = resultado"
// ============================================================

const calculadora = {
  _historico: [],

  calcular(v1, tipo, v2) {
    let resultado;
    switch (tipo) {
      case "+":
        resultado = v1 + v2;
        break;
      case "-":
        resultado = v1 - v2;
        break;
      case "/":
        resultado = v1 / v2;
        break;
      case "*":
        resultado = v1 * v2;
        break;
      default:
        return "tipo invalido";
    }
    this._historico.push(`${v1} ${tipo} ${v2} = ${resultado}`);
    return resultado;
  },
  get historico() {
    return this._historico;
  },
};

// Teste seu código:
console.log(calculadora.calcular(5, "+", 3)); // 8
 console.log(calculadora.calcular(10, '*', 2));   // 20
 console.log(calculadora.calcular(20, '/', 4));   // 5
 console.log(calculadora.historico);
// // ["5 + 3 = 8", "10 * 2 = 20", "20 / 4 = 5"]
