const tecno = new Map();
// .set() serve para criar ou atualizar um par de Chave e Valor
tecno.set("react", { framework: false });
tecno.set("angular", { framework: true });

console.log(tecno.react); // Errado: Não se usa ponto '.' no Map
console.log(tecno.get("react").framework); // Certo: .get() busca o valor da chave "react"

const chaveVariadas = new Map([
  [function () {}, "função"],
  [{}, "objeto"],
  [123, "Numero"],
]);

// O forEach do Map é invertido: o primeiro parâmetro é o VALOR (vl) e o segundo é a CHAVE (ch)
chaveVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chaveVariadas.has(123)); // .has() checa se a chave 123 existe ali dentro (retorna true)
chaveVariadas.delete(123);           // .delete() apaga a chave 123 e o valor dela
console.log(chaveVariadas.has(123)); // Como foi deletado, agora retorna false
console.log(chaveVariadas.size);     // .size diz quantos itens tem lá dentro (igual o .length do array)