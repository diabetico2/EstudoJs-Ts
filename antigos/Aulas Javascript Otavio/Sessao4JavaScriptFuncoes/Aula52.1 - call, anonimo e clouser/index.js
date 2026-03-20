function criarContador(n) {
  // Retornamos uma Função Anônima
  return function () {
    n = n + 1;
    console.log("Número atual: " + n);
  };
}

// 1. O "meuContador" recebe a função anônima com a "mochila" (Closure)
const meuContador = criarContador(1);
const outroContador = criarContador(2);

// 2. Vamos usar
meuContador(); // O que imprime aqui?
meuContador(); // E aqui?
meuContador(); // E aqui?
outroContador(); //1
