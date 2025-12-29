let A = 'A' // B
let B = 'B' // C
let C = 'C' // A
let temporario = A

A = B
B = C
C = temporario
// * A tarefa consiste em fazer que A tenha o valor de B, B tenha o valor de C, e C tenha o valor de A

console.log(A,B,C)