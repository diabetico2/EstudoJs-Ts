// ============================================================
// EXERCÍCIO 13 - NÍVEL 4: AGENDA COM VALIDAÇÃO
// ============================================================
// Objetivo: Crie um objeto agenda que:
// - Tenha propriedade _eventos (array)
// - Tenha um método adicionarEvento(nome, dia, horario) que:
//   - Valida se o dia é entre 1-31
//   - Valida se o horario é válido (HH:MM, formato 00:00 a 23:59)
//   - Não adiciona eventos duplicados (mesmo dia e hora)
// - Tenha um método listarEventos() que retorna todos
// - Tenha um método buscarPorDia(dia) que filtra eventos por dia
//
// CAMINHO DE RACIOCÍNIO:
// 1. Como você valida se um número está entre 1 e 31?
// 2. Como você valida um horário no formato "HH:MM"?
//    (Dica: pode usar split(':') para separar horas e minutos)
// 3. Como você verifica se um evento já existe? (using .find() ou .some())
// 4. Se tudo é válido, você adiciona ao array
// 5. Filtrar por dia é simples: .filter()
//
// DOCUMENTAÇÃO:
// - Array.find(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// - Array.some(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// - String.split(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// - parseInt(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//
// EXEMPLO DO CONCEITO:
// Validação múltipla: usar && entre várias condições
// Buscar existência: .find() retorna o item ou undefined
// Formato "HH:MM": split(':') separa em [horas, minutos]
// ============================================================

const agenda = {
  _eventos: [],

  adicionarEvento(nome, dia, horario) {
    // Seu código - validações e adição
  },

  listarEventos() {
    // Seu código
  },

  buscarPorDia(dia) {
    // Seu código
  }
};

// Teste seu código:
// agenda.adicionarEvento('Reunião', 15, '14:30');
// agenda.adicionarEvento('Almoço', 15, '12:00');
// agenda.adicionarEvento('Reunião', 15, '14:30');  // Duplicado, não adiciona
// agenda.adicionarEvento('Palestra', 20, '18:00');
//
// console.log(agenda.listarEventos());
// // [
// //   { nome: 'Reunião', dia: 15, horario: '14:30' },
// //   { nome: 'Almoço', dia: 15, horario: '12:00' },
// //   { nome: 'Palestra', dia: 20, horario: '18:00' }
// // ]
//
// console.log(agenda.buscarPorDia(15));
// // [
// //   { nome: 'Reunião', dia: 15, horario: '14:30' },
// //   { nome: 'Almoço', dia: 15, horario: '12:00' }
// // ]
