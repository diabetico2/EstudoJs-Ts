function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}
const funcao = retornaFuncao("jose");
const funcao2 = retornaFuncao("yeey");
console.dir(funcao);

console.dir(funcao2);
console.log(funcao())