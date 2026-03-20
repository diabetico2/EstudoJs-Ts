/* EXEMPLO 1: Desestruturação de Array
  Aqui a função espera receber UM array, mas já separa 
  os valores em variáveis v1, v2 e v3 automaticamente.
*/
function funcao([v1, v2, v3]) {
  console.log(v1, v2, v3);
}

// Enviamos um array completo ['allan', 'jose', 20]
// O JS faz: v1='allan', v2='jose', v3=20
funcao(['allan', 'jose', 20]);


/* EXEMPLO 2: Rest Operator (...)
  Este é o jeito moderno de pegar vários argumentos.
  - operador: pega o primeiro valor ('*')
  - acumulador: pega o segundo valor (20)
  - ...numeros: O Rest Operator pega TODO O RESTO e coloca num array [20, 30, 40, 50]
*/
function conta(operador, acumulador, ...numeros) {
    // Como 'numeros' é um array real, podemos usar o for...of
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

// Chamando a função:
// '*' vai para operador
// 1 vai para acumulador
// 20, 30, 40, 50 vão para o array 'numeros'
conta('*', 1, 20, 30, 40, 50);


/* EXEMPLO 3: Arrow Function e Argumentos
  Importante: Arrow Functions NÃO possuem a variável 'arguments'.
  Se você precisar pegar todos os argumentos nela, É OBRIGATÓRIO usar o Rest Operator (...args).
*/
const contaArrow = (...args) => {
    console.log(args); // Isso cria um array com tudo que foi enviado
};

contaArrow(1, 2, 3, 4, 5);