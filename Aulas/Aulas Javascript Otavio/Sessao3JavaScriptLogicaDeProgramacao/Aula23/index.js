// short-circuit: parar a chegagem na hora que achar um valor false

console.log('Allan' && 0 && 'Jose') // o false é o "0"
console.log('Allan' && true && 'Jose') // Nenhum é falso, então ele vai até o final

const a = 0
const b = null
let c = 'false'
const d = false
const e = undefined
console.log (a|| b || c || d || e) /* Quando o valor é Or, ele para no ultimo verdadeiro, nesse caso é o 'false'
já que ele esta dentro de ' ' , caso não aja verdadeiro, ele pega o ultimo valor falso
*/
c = false
console.log (a|| b || c || d || e) // nesse caso sendo undefined