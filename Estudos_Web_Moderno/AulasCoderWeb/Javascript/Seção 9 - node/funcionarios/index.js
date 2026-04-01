// ttp://files.cod3r.com.br/curso-js/funcionarios.json

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const salario =  ((fun, funAtual) =>{
    return fun.salario < funAtual.salario? fun: funAtual
})

axios.get(url).then(response =>{ // ele pega os dados da URL json ( get ) e dai realiza uma ação (then)
    const funcionarios = response.data // o funcionarios recebe toda as infos de response
    console.log(funcionarios)
})
// pegar a mulher chinesa com o menor salario