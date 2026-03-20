const alunos = [{ nome: "joao", nota: 7, bolsista: false },
    { nome: "maria", nota: 8.2, bolsista: true },
    { nome: "pedro", nota: 9, bolsista: false },
    { nome: "kauan", nota: 5.7, bolsista: true }
];
// desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map( a => a.bolsista).reduce(todosBolsistas))

// desafio 2: algum aluno é bolsista

const quemBolsita = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(quemBolsita))

// estudar melhor sobre reduce, map e filter, não consegui fazer isso, pedir pro gemini fazer
//tarefas parecidas com essa para pegar melhor