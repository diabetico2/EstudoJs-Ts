const aprovados = ["A", "B", "C", "D"];
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`);
});

console.log("//////////");
aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (aprovado) => console.log(aprovado);
console.log("//////////");

aprovados.forEach(exibirAprovados);
