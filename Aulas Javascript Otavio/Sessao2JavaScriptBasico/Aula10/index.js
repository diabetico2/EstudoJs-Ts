// * Aritimeticos

const num1 = 10;
// ! const num2 = "Allan" nesse caso, ele daria NaN ( Not a Number )
// *const num2 = "3"; Mas dessa forma, mesmo que não seja uma boa pratica, funciona, pois o JS "converte" o numero string para number
const num2 =parseInt('5'); //* parseInt converte a string para number
const num3 = parseFloat('5.2') //* converte de string para float
const num4 = Number('5.8') //* converte string para qualquer um, seja inteiro ou flutuante ( quebrado )
const num5 = Number('2') //* converte string para qualquer um, seja inteiro ou flutuante ( quebrado )
console.log(num1 + num2 + num3 + num4 + num5);
console.log(typeof num2, typeof num3, typeof num4, typeof num5); 
/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 * num2);
console.log(num1 % num2);
*/
let contador = 0;
contador += 2; // contador = contador + 50
contador **= 10;
console.log(contador);
