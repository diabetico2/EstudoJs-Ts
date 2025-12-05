// =========================================================================
// ? CONCEITO: FUNÇÃO ANÔNIMA
// =========================================================================
//
// Uma função anônima é aquela que NÃO possui um nome próprio logo após a
// palavra-chave 'function'. Elas são muito usadas para serem passadas como
// dados ou executadas imediatamente.
//
// * ONDE ELAS ESTÃO NESTE CÓDIGO?
//
// 1. ARMAZENADA EM VARIÁVEL:
//    'const soma = function (x, y)...'
//    A função em si não tem nome, mas a variável 'soma' guarda ela.
//
// 2. PASSADA COMO ARGUMENTO (CALLBACK):
//    Na linha do 'x - y', criamos uma função na hora, sem nome, apenas
//    para ser executada dentro de 'imrpimirResultado'.
//
// 3. ARROW FUNCTION (SEMPRE ANÔNIMA):
//    '(x, y) => x * y'
//    Toda Arrow Function é anônima. Ela é uma forma mais curta de escrever
//    uma função anônima.
//
// 4. COMO MÉTODO DE OBJETO:
//    'falar: function() ...'
//    A função não tem nome, ela é identificada pela chave 'falar' do objeto.
// =========================================================================

// 1. Função Anônima atribuída a uma constante
const soma = function (x, y) {
  return x + y;
};

// Aqui definimos um valor padrão: se não passar a operação, usa a 'soma'
const imrpimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imrpimirResultado(3, 4); // Usa o padrão (soma)
imrpimirResultado(3, 4, soma); // Passa a variável que guarda a função

// 2. Função Anônima criada "na hora" (passada como argumento)
imrpimirResultado(3, 4, function (x, y) {
  return x - y;
});

// 3. Arrow Function (que também é uma função anônima)
imrpimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  // 4. Função Anônima como método de um objeto
  falar: function () {
    console.log("Opa");
  },
};

pessoa.falar();