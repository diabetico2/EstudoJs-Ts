function primeiroElemento(array) {
  return array[0];
} // é possivel criar function exeriores para passar em um then, em vez de criar elas como anonimas
function primeiraLetra(string) {
  return string[0];
}
function minusculo(vari) {
  return vari.toLowerCase();
}
new Promise(function (resolve) {
  //cumprirPromessa(3, 4) // só pode ser passado um unico valor
  //   cumprirPromessa({
  //     x: 3,
  //     y: 4, // mas caso preciso, só criar um objeto com os valores
  //   });
  resolve(["Ana", "Bia", "Carlos", "Daniel"]); // também é possivel com lista
})
  .then(primeiroElemento) // chegou o array inteiro, mas só pegou o primeiro valor
  .then(primeiraLetra) // nessa proxima chamada, o resultado é o valor da
  // primeira chamada
  .then(minusculo) // na chamada anterior, primeira só tinha Ana, e como ele pegou o
  // primeiro caracter do nome (já que só possuia esse nome devido a lista anterior a ela) esse then
  //só recebeu o A
  .then(console.log); // ele recebe a letra minuscula devido ao then
//anterior, e por ai vai (esse then consegue ativar o console.log devido a receber um unico parametro)
