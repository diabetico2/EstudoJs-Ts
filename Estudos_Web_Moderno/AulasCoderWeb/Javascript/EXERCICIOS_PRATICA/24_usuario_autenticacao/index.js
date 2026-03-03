// ============================================================
// EXERCÍCIO 24 - NÍVEL 3: AUTENTICAÇÃO DE USUÁRIO
// ============================================================
// Objetivo: Crie um objeto "autenticacao" que:
// - Armazene dois usuários pré-cadastrados com senha
// - Método login(usuario, senha) → retorna true/false
// - Método registrar(usuario, senha) → cria novo usuário
//   (valida: usuário não pode existir, senha mínimo 6 caracteres)
// - Getter usuarioLogado → retorna nome do user logado ou null
// - Método logout() → desconecta
// - Método alterarSenha(usuarioAtual, senhaAtual, novaSenha)
//
// Dicas:
// - Guarde todos os usuários em um objeto interno
// - Mantenha estado de quem está logado
// - Valide tudo antes de fazer algo
// ============================================================

const autenticacao = {
  // Seu código aqui
};

// Teste seu código:
// autenticacao.registrar("joao", "senha123");
// console.log(autenticacao.login("joao", "senha123"));     // true
// console.log(autenticacao.usuarioLogado);                 // "joao"
// autenticacao.logout();
// console.log(autenticacao.usuarioLogado);                 // null
