// ============================================================
// EXERCÍCIO 02 - NÍVEL 1: VALIDAR EMAIL
// ============================================================
// Objetivo: Crie uma função que receba uma string e retorne 
// true se contiver "@" e ".", false caso contrário.
//
// Dicas:
// - Use os métodos .includes() para verificar caracteres
// - Você pode usar && (E) para verificar ambas as condições
// ============================================================

function validarEmail(email) {
  if (email.includes('@') && email.includes('.')){
    return true
  } else {
    return false
  }
}

// Teste seu código:
 console.log(validarEmail("joao@gmail.com"));     // true
 console.log(validarEmail("joaomail.com"));       // false
 console.log(validarEmail("joao@.com"));          // true
