let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// * aqui faz que os valores em cara parte do primeiro "[]" va para o valor do segundo "[]"
[varA , varB, varC] = [varB , varC , varA]

console.log(varA,varB,varC)