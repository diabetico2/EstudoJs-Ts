// ============================================================
// EXERCÍCIO 15 - NÍVEL 4: COMPOSIÇÃO DE FUNÇÕES (DESAFIO EXTRA)
// ============================================================
// Objetivo: Crie uma função "compor" que receba duas funções 
// e retorne uma função que executa a primeira, passa o resultado 
// para a segunda
//
// Exemplo:
// const dobrar = x => x * 2;
// const adicionar5 = x => x + 5;
// const resultado = compor(dobrar, adicionar5);
// resultado(3) → primeiro dobra (3*2=6), depois adiciona 5 (6+5=11) → 11
//
// Dicas:
// - compor() retorna uma FUNÇÃO
// - Essa função retornada chama a primeira função
// - Passa o resultado para a segunda função
// - Use: return (valor) => funcao2(funcao1(valor));
// ============================================================

function compor(funcao1, funcao2) {
  // Seu código aqui
}

// Teste seu código:
// const dobrar = x => x * 2;
// const adicionar5 = x => x + 5;
// const multiplicarPor3 = x => x * 3;
//
// const resultado1 = compor(dobrar, adicionar5);
// console.log(resultado1(3));                       // 11
//
// const resultado2 = compor(dobrar, multiplicarPor3);
// console.log(resultado2(2));                       // 12
