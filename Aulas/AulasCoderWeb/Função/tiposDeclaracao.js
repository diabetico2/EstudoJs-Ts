console.log(soma(3, 4)); // é possivel chamar antes da declaração

// function declaration
function soma(a, b) {
  return a + b;
}
// function expression
const subtracao = function (a, b) {
  return a - b;
};

console.log(subtracao(10, 5));// mas não é possivel chamar antes da declaração por conta do function expression

// named function expression
const multiplicacao = function mult(a, b) {
  return a * b;
};

console.log(multiplicacao(2, 3));// aqui é a mesma coisa, não é possivel chamar antes da declaração do named function expression
