📄 Resumo: Maneiras de Declarar Funções (Aula 47)
No JavaScript, funções são "cidadãos de primeira classe" (First-Class Objects). Isso significa que elas podem ser tratadas como qualquer outro dado (como um número ou uma string): podem ser guardadas em variáveis, passadas como argumento e retornadas por outras funções.

Abaixo, os 4 tipos principais apresentados na aula:

1. Declaração Clássica (Function Hoisting)
É a forma mais comum: function nome() { ... }.

O que é especial: O JavaScript faz o Hoisting (içamento). Antes de executar o código, a engine do JS "eleva" essas funções para o topo do arquivo.

Na prática: Você pode chamar a função antes de declarar ela no código.

Exemplo do código: A função falaOi() é chamada na linha 2, mesmo sendo criada na linha 3.

2. Function Expression (Função como dado)
Aqui, criamos uma função (geralmente sem nome, ou anônima) e a guardamos dentro de uma variável (const, let ou var).

O que é especial: Como é uma variável, ela não sofre hoisting da mesma forma. Você é obrigado a criar a função antes de usá-la.

Poder extra: Isso prova que funções são dados. Podemos passar essa variável souUmDado para outra função executar (como feito na função executaFuncao).

Exemplo do código: const souUmDado = function() { ... }

3. Arrow Function (ES6)
É uma sintaxe mais moderna e curta introduzida no ES6 (EcmaScript 2015).

Sintaxe: Usa a "seta" => e elimina a palavra function.

Uso: Muito utilizada para funções curtas e callbacks.

Exemplo do código: const funcaoArrow = () => { ... }

4. Função dentro de Objeto (Método)
Como funções são dados, elas podem ser valores de propriedades dentro de um objeto.

Nome: Quando uma função está dentro de um objeto, chamamos ela de Método.

Exemplo do código: O objeto obj tem a propriedade falar, que executa uma função.