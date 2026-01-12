// console.log('linha 1')
// console.log('linha 2')
// console.log('linha 3')
// console.log('linha 4')
// console.log('linha 5')

for ( let i = 1; i< 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`linha ${i}`, par);
}

console.log('------------------');

for ( let i = 500; i >= 400; i -= 10) {
    console.log(`linha ${i}`);
}

console.log('------------------');

const frutas = ['maçã', 'banana', 'pera', 'uva', 'kiwi'];

for (let i = 0; i <= frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}