// ============================================================
// CORREÇÃO DO EXERCÍCIO 01 - CALCULAR IDADE
// ============================================================
// Análise e exemplos de implementação
// ============================================================

// SOLUÇÃO SIMPLES E DIRETA:
function calcularIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;
  console.log(`Você tem ${idade} anos`);
  return idade;
}

// OU MAIS CONCISA (sem variáveis intermediárias):
function calcularIdade_v2(anoNascimento) {
  return new Date().getFullYear() - anoNascimento;
}

// ============================================================
// PONTOS IMPORTANTES:
// ============================================================
// 
// ✅ CORRETO: new Date().getFullYear() retorna o ano atual
//    Exemplo: 2026
//
// ✅ CORRETO: Subtração simples: anoAtual - anoNascimento
//    Exemplo: 2026 - 2004 = 22
//
// ⚠️ NOTA: Esta é uma idade "aproximada"
//    Por quê? Porque não considera mês/dia
//    Se alguém nasceu em dez/2004 e estamos em mar/2026,
//    tecnicamente pode ter 21 ou 22 anos dependendo do dia exato
//
// ============================================================
// TESTE:
// ============================================================
console.log(calcularIdade(2004));    // "Você tem 22 anos" + return 22
console.log(calcularIdade_v2(1990)); // return 36

// ============================================================
// O QUE VOCÊ PODERIA TER MELHORADO:
// ============================================================
// 
// 1. Usar const em vez de var (melhor prática moderna)
// 2. Considerar se quer RETORNAR o valor ou só exibir
// 3. Adicionar validação:
//    - Ano negativo não faz sentido
//    - Ano futuro também não faz sentido
// 
// ============================================================
// VERSÃO COM VALIDAÇÃO:
// ============================================================

function calcularIdadeSegura(anoNascimento) {
  const anoAtual = new Date().getFullYear();
  
  // Validação 1: Ano negativo
  if (anoNascimento < 0) {
    return "Ano inválido (não pode ser negativo)";
  }
  
  // Validação 2: Ano futuro
  if (anoNascimento > anoAtual) {
    return "Ano inválido (não pode ser maior que o ano atual)";
  }
  
  const idade = anoAtual - anoNascimento;
  return idade;
}

// ============================================================
// PARABÉNS! Este exercício é simples, mas essencial.
// Você aprendeu:
// ✅ new Date().getFullYear()
// ✅ Operações matemáticas simples
// ✅ Template literals para exibir
// ============================================================
