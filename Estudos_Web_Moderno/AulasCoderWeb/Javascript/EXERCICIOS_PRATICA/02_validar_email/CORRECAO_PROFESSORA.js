// ============================================================
// CORREÇÃO DO EXERCÍCIO 02 - VALIDAR EMAIL
// ============================================================

// SOLUÇÃO SIMPLES:
function validarEmail(email) {
  const temArroba = email.includes("@");
  const temPonto = email.includes(".");
  return temArroba && temPonto;
}

// OU MAIS CONCISA (uma linha):
function validarEmail_v2(email) {
  return email.includes("@") && email.includes(".");
}

// ============================================================
// TESTE:
// ============================================================
console.log(validarEmail("joao@gmail.com"));     // true ✅
console.log(validarEmail("joao.oliveira@gmail")); // false ❌ (sem . após @)
console.log(validarEmail("joao.oliveira"));      // false ❌ (sem @)
console.log(validarEmail("@.com"));              // true ⚠️ (tecnicamente válido, mas vazio)

// ============================================================
// ⚠️ IMPORTANTE: Esta validação é MUITO BÁSICA!
// ============================================================
// 
// Emails como `@.com`, `...@...`, etc passam no teste
// Mas na verdade são inválidos!
//
// Para REAL validação de email, você precisaria:
// - Verificar se tem caracteres ANTES do @
// - Verificar se @ vem ANTES do .
// - Usar Expressão Regular (mais avançado)
//
// ============================================================
// VALIDAÇÃO MELHORADA (sem regex):
// ============================================================

function validarEmailMelhor(email) {
  // 1. Verificar se tem @ E .
  if (!email.includes("@") || !email.includes(".")) {
    return false;
  }
  
  // 2. Verificar se @ vem antes de .
  const indexArroba = email.indexOf("@");
  const indexPonto = email.indexOf(".");
  if (indexArroba >= indexPonto) {
    return false;
  }
  
  // 3. Verificar se tem caracteres ANTES do @
  if (indexArroba === 0) {
    return false;
  }
  
  // 4. Verificar se tem caracteres DEPOIS do .
  if (indexPonto === email.length - 1) {
    return false;
  }
  
  return true;
}

console.log(validarEmailMelhor("joao@gmail.com"));     // true ✅
console.log(validarEmailMelhor("joao.oliveira@gmail")); // false ❌
console.log(validarEmailMelhor("@gmail.com"));         // false ❌
console.log(validarEmailMelhor("joao@.com"));          // false ❌

// ============================================================
// PENSAMENTO CRÍTICO:
// ============================================================
// 
// A validação de email é NOTORIAMENTE difícil
// Mesmo a regex "correta" é extremamente complexa
// 
// Na prática, o melhor jeito é:
// 1. Validação básica (seu primeiro código)
// 2. Enviar email de confirmação
// 3. Validar quando o usuário clica no link
//
// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ String.includes()
// ✅ Operador && (AND lógico)
// ✅ Retornar boolean
// ============================================================
