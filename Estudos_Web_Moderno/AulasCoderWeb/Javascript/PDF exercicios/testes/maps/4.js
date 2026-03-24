
const contarVogais = function(v){
const array = [...v]
const form = array.filter((e) => ['a', 'e', 'i', 'o', 'u'].includes(e))

return form.length
}



console.log(contarVogais('JavaScript'.toLowerCase()))