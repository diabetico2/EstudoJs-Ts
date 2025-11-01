function fizzbuzz(n){
 if (typeof n !== 'number'){
    return NaN
 }
  if (n % 3 === 0) return'fizz'
  if (n % 5 === 0) return'buzz'
  if (n % 3 === 0 && n % 5 === 0) return'fizzbuzz'
    return n
}
console.log()
for (let i = 0; i<= 100; i++){
    console.log(i,fizzbuzz(i))
}