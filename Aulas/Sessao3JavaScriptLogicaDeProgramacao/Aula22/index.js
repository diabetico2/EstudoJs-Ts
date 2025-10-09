const sol = true;
const noite = false;

console.log (sol && noite) // ambos devem ser true (  and )
console.log (sol || noite)// só um tem que ser true ( or )
console.log (sol && !noite) // ele inverte um valor de uma variavel ( no caso, noite foi de falso para true)
