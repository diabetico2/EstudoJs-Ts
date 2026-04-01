// ttp://files.cod3r.com.br/curso-js/funcionarios.json

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const cidadeM = (m) => m.pais === "Russia";
const generoM = (m) => m.genero === "M";
const salarioM = (v, vAtual) => {
  return v.salario > vAtual.salario ? v : vAtual;
};
//
const cidadania = (f) => f.pais === "China";
const genero = (f) => f.genero === "F";
const salario = (v, vAtual) => {
  return v.salario < vAtual.salario ? v : vAtual;
};

axios.get(url).then((response) => {
  // ele pega os dados da URL json ( get ) e dai realiza uma ação (then)
  const funcionarios = response.data; // o funcionarios recebe toda as infos de response
  const resul = funcionarios.filter(cidadania).filter(genero).reduce(salario);
  const resulM = funcionarios.filter(cidadeM).filter(generoM).reduce(salarioM)
  console.log(resul);
});
// pegar a mulher chinesa com o menor salario

axios.get(url).then((response) => {
  const funcionarios = response.data; 
  const resulM = funcionarios.filter(cidadeM).filter(generoM).reduce(salarioM);
  console.log(resulM)
});