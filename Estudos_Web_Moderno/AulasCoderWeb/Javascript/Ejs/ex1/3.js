const funcionarios = [
    { nome: 'Shurwood', salario: 17056.83 }, 
    { nome: 'Rumgay', salario: 12000.00 }
];

// DICA: O 'acc' começa em 0. O 'f' é o funcionário da vez.
const somarSalarios = (acc, f) => acc + f.salario

const totalFolha = funcionarios.reduce(somarSalarios, 0);

console.log(totalFolha);