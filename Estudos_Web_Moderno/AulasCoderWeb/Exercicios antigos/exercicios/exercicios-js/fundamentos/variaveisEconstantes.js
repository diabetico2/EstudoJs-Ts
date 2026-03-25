var a = 3; //! importante lembrar que "var" não é tão utilizado atualmente, apenas "let", "const" e afins
let b = 4;

var a = 30;
b = 40;
/*
 * var permite redeclaração e reatribuição no mesmo escopo.
 * let permite apenas reatribuição, mas não redeclaração no mesmo escopo.
 */
console.log(a, b);

a = 300;

b = 200;

console.log(a, b);

const c = 5;

//c = 40; // * const não permite nem reatribuição nem redeclaração no mesmo escopo.

console.log(c);
