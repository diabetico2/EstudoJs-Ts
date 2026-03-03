// ============================================================
// EXERCÍCIO 28 - NÍVEL 4: GERENCIADOR DE TAREFAS
// ============================================================
// Objetivo: Crie um objeto "gerenciador" que:
// - Armazene tarefas com: id (único), titulo, descricao, concluida
// - Método adicionar(titulo, descricao) → retorna o id
// - Método completar(id) → marca como concluída
// - Método deletar(id) → remove a tarefa
// - Getter tarefasPendentes → retorna array com não concluídas
// - Getter tarefasConcluidas → retorna array com concluídas
// - Getter progresso → retorna % de tarefas concluídas
// - Método editar(id, titulo, descricao)
//
// Dicas:
// - Use um contador para gerar IDs únicos
// - Mantenha um array interno de tarefas
// - Para porcentagem: (concluídas / total) * 100
// ============================================================

const gerenciador = {
  // Seu código aqui
};

// Teste seu código:
// const id1 = gerenciador.adicionar("Estudar JS", "Learn objects");
// const id2 = gerenciador.adicionar("Fazer exercícios", "Practice");
// gerenciador.completar(id1);
// console.log(gerenciador.progresso);        // 50
// console.log(gerenciador.tarefasPendentes.length);  // 1
