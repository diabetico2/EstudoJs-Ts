// ============================================================
// EXERCÍCIO 13 - NÍVEL 4: AGENDA COM VALIDAÇÃO
// ============================================================
// Objetivo: Crie um objeto agenda que:
// - Tenha um objeto interno _contatos (vazio no início)
// - Método adicionarContato(nome, telefone, email)
//   - Validar: telefone deve ter 11 dígitos
//   - Validar: email deve ter "@"
//   - Se inválido, retorne false
//   - Se válido, adicione e retorne true
// - Getter buscarContato(nome) que retorna o contato ou null
// - Método deletarContato(nome) que remove da agenda
// - Getter listaContatos que retorna array com todos os nomes
//
// Dicas:
// - Armazene em _contatos como: { "João": { tel, email }, ... }
// - Para validar telefone: telefone.length === 11 && Number(telefone)
// - Para validar email: email.includes("@")
// ============================================================

const agenda = {
  _contatos: {},
  
  // Seu código aqui
};

// Teste seu código:
// console.log(agenda.adicionarContato("João", "11987654321", "joao@gmail.com"));  // true
// console.log(agenda.adicionarContato("Maria", "1198", "maria@gmail.com"));       // false (telefone)
// console.log(agenda.adicionarContato("Pedro", "11987654321", "pedrogmail.com")); // false (email)
// console.log(agenda.listaContatos);                                              // ["João"]
// console.log(agenda.buscarContato("João"));                                      // { tel: ..., email: ... }
