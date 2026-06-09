// com promisse

const { resolve } = require("dns");
const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};
// let nomes = [];
// getTurma("A").then((alunos) => {
//   nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
//   getTurma("B").then((alunos) => {
//     nomes = nomes.concat(alunos.map((b) => `B: ${b.nome}`));
//     // erro: o callback de B não estava aninhado antes do console.log,
//     // então C podia ser chamado e o log executado antes de B terminar.
//     getTurma("C").then((alunos) => {
//       nomes = nomes.concat(alunos.map((c) => `C: ${c.nome}`));
//       console.log(nomes);
//     });
//   });
// });

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]) //passa varias promisses
  .then((turmas) => [].concat(...turmas))
  .then(alunos => alunos.map(alunos => alunos.nome))
  .then(nomes => console.log(nomes))

getTurma('D').catch((e => console.log(e.message)))