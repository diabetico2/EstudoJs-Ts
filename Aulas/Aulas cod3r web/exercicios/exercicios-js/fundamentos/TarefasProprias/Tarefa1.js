// * Ótimo uso de constantes (const), que é a melhor prática para valores que não mudam.

//! Dica 1: Convenção de Nomenclatura (camelCase)
//  Em JavaScript, a convenção para nomes de variáveis e constantes é "camelCase" (começando com minúscula).
//  "Name" vira "name", "Cidade" vira "cidade", e assim por diante. Facilita a leitura para outros programadores.
const name = 'Allan José';
const cidade = 'Iracema Do Oeste';
const profissao = 'Dev';

//! Dica 2: Tipos de Dados Corretos
//  O ano de nascimento é um valor numérico. É uma boa prática declará-lo como 'number' em vez de 'string'.
//  O JavaScript consegue calcular '2025 - "2004"' por ter tipagem fraca, mas em muitas linguagens isso daria erro.
//  Usar o tipo certo desde o início evita bugs inesperados.
const anoNascimento = 2004; // Sem as aspas

// * Excelente uso de template string para montar a frase! É o jeito mais moderno e legível.
// ? Pergunta para reflexão: O que aconteceria se você usasse o sinal de '+' em vez de '-' na hora de calcular a idade com a string '2004'?
// ? Resposta: Ele concatenaria e o resultado seria "20252004"! Mais um motivo para usar 'number'.
console.log(`Meu nome é ${name}, tenho ${2025 - anoNascimento} anos, moro em ${cidade} e atualmente trabalho como ${profissao}.`);