const boletim = [
  ["Allan", 8, 9],
  ["Ana", 5, 6],
  ["Beto", 10, 7],
];

const aprovados = (dados) => {
  return dados
    .map(([nome, n1, n2]) => {
      const mediaFinal = n1 + n2 / 2;
      return { aluno: nome, media: mediaFinal };
    })
    .filter(({ media }) => {
      return media > 7;
    });
};

console.log(aprovados(boletim));
