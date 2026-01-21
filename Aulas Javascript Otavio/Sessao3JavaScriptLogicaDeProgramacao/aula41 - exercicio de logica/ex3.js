// escreva uma função que recebe um numero e retorne o seguinte? é divisel por 3: fizz, é divisivel por 5, buzz, por 3 e por 5 é fizzbuzz, se não for, retorna o proprio numeri
//chegar se o numero realmente é um numero
//use a função com numeros de 0 a 100
const fizzbuzz = (n) => {
    if (typeof n !== 'number') return 'não é numero'
    return (n % 3 === 0 && n % 5 === 0)? 'Fizbuzz':
           (n % 3 === 0)? 'fizz':
           (n % 5 === 0)? 'buzz':
           n;
}
for (let i = 0; i < 100; i++){
    console.log(fizzbuzz(i,fizzbuzz(i)))
}