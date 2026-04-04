const funcionarios = [
  { nome: "Shurwood", genero: "M" },
  { nome: "Julia", genero: "F" },
];

// let boasVindas = [];
// for (let i = 0; i < funcionarios.length; i++) {
//     const saudacao = funcionarios[i].genero === 'M' ? 'Bem-vindo' : 'Bem-vinda';
//     boasVindas.push(`${saudacao}, ${funcionarios[i].nome}!`);
// }
// console.log(boasVindas);

const saudar = (f) => {
  const s =  f.genero === "M" ? "Bem vindo" : "bem vinda";
  return `${s}, ${f.nome}`
};

const resul = funcionarios.map(saudar);

console.log(resul);
