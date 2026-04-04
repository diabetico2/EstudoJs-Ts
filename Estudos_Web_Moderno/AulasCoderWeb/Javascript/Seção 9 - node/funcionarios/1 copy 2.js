// ttp://files.cod3r.com.br/curso-js/funcionarios.json

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const nomes = (m) => `${m.nome}, ${m.sobrenome}`;
const salario = (fun) => {
  return fun.salario > 15000;
};

axios.get(url).then((response) => {
  // ele pega os dados da URL json ( get ) e dai realiza uma ação (then)
  const funcionarios = response.data; // o funcionarios recebe toda as infos de response
  const resul = funcionarios.filter(salario).map(nomes)
  console.log(resul);
});
