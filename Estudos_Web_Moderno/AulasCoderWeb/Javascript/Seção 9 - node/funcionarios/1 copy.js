// ttp://files.cod3r.com.br/curso-js/funcionarios.json

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  // ele pega os dados da URL json ( get ) e dai realiza uma ação (then)
  const funcionarios = response.data; // o funcionarios recebe toda as infos de response
  const mulher = funcionarios.filter((f) => f.genero === 'F')
  const salario = funcionarios.reduce((fun,ac)=> fun + ac.salario,0);
  const media = salario / mulher.length

  console.log(`A média salarial das mulheres é: ${media.toFixed(2)}`)

});

