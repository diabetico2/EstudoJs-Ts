// closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e maniuplar variáveis externas à função.

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao()) // Qual valor será impresso? 'local' devido ao closure.
// A função 'dentro' tem acesso ao escopo da função 'fora', onde a variável 'x' é 'local'.
// Portanto, a saída será 'local'.