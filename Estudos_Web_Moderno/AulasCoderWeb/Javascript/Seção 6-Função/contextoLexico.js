// contexto lexico é onde a função foi declarada fisicamente no código fonte.
// Não importa onde a função é chamada, ela sempre terá acesso ao contexto onde foi declarada.
const valor = 'Global'
function minhaFuncao() {
    console.log(valor)
}

// A função minhaFuncao foi declarada no contexto global,
// então ela acessa a variável 'valor' do contexto global.
function exec() {
    // Mesmo havendo uma variável 'valor' local, a função
    // ainda acessa a variável do contexto léxico onde foi declarada.
    const valor = 'Local'
    minhaFuncao()
}

exec() // Qual valor será impresso? 'Global' devido ao contexto léxico.
// Contexto léxico é o local onde a função foi declarada, não onde ela foi chamada.
// Portanto, a saída será 'Global'.
