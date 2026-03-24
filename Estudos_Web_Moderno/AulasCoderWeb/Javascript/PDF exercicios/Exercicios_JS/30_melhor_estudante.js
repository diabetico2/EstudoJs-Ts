const recuperarMelhorEstudante = (estudantes) => {
    // 1. Transformamos o objeto em um Array de [nome, notas]
    const estudantesComMedias = Object.entries(estudantes).map(([nome, notas]) => {
        
        // 2. Somamos as notas usando o reduce e dividimos pelo total (média)
        const soma = notas.reduce((acumulador, atual) => acumulador + atual, 0)
        const media = soma / notas.length
        
        // 3. Retornamos um objeto temporário com nome e média calculada
        return { nome, media }
    })

    // 4. Ordenamos o array para que a MAIOR média fique na primeira posição [0]
    const estudantesOrdenados = estudantesComMedias.sort((a, b) => b.media - a.media)

    // 5. Retornamos apenas o primeiro do ranking
    return estudantesOrdenados[0]
}

console.log(recuperarMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], 
  Mariana: [9, 6.6, 7.9, 8], 
  Carla: [7, 7, 8, 9] 
}))