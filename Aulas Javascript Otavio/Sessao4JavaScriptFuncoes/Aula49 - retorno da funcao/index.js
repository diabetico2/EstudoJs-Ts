// 1. A "Fábrica": Esta função recebe um número para configurar o robô.
function criaMultiplicador(multiplicador) {
  
  // 2. O segredo: Ela NÃO faz a conta. Ela RETORNA uma nova função.
  // Essa nova função "nasce" sabendo qual foi o "multiplicador" (ex: 2)
  // e guarda ele na memória para sempre.
  return function(n) {
    return n * multiplicador; 
  };
}

// 3. Criação: Aqui criamos uma função específica que sempre multiplica por 2.
// O 'multiplicador' interno fica valendo 2.
const duplica = criaMultiplicador(2);

// 4. Uso: Agora usamos a nova função criada.
// O 3 entra no lugar do 'n'.
// A conta final é: 3 (n) * 2 (multiplicador guardado).
console.log(duplica(3)); // Resultado: 6