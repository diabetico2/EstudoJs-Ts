//let e const
{
  var a = 2;
  let b = 3;
  const c = 5;

  console.log(b); // tem escopo de bloco, logo não pode ser acessada fora
}
console.log(a); // var não é, então pode ser acessado

//template string
const produto = "ipad";
console.log(`${produto} é caro`);

// Destructuring
const [l, e, ...tras] = "cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);
const { idade: i, nome } = { nome: "Allan", idade: 21 }; // I agora é idade
console.log(nome, i);
