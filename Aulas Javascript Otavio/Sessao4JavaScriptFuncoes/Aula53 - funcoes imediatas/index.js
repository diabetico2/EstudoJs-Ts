//IIFE -> Immediayely invoked function expression
(function (idade, peso, altura) {
  // nn afeta o escopo global
  const sobreNome = "Jose";
  function criaNome(nome) {
    return nome + " " + sobreNome;
  }
  function falaNome() {
    console.log(criaNome("Allan"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8); // idade peso e altura
