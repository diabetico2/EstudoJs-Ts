const nomes = ["Allan", "Maria", "João"];

console.log(typeof nomes)
console.log (nomes  instanceof Array) // verifica se é array


nomes.unshift ('José'); // * Adiciona no começo
nomes.push ('Fabio'); // * Adiciona no fim

console.log(nomes);

const removido = nomes.pop(); // *pop Apaga o ultimo
const removido2 = nomes.shift(); // * shift Apaga primeiro

console.log(removido, 'foi removido')
console.log(removido2, 'foi removido')
console.log(nomes)

// delete nomes[1] //* deleta nome do array especifico

console.log(nomes)
console.log(nomes.slice(0,2)) // pega valores dentro do arrays em alocamento especificos
console.log(nomes.slice(1,3))


//nomes[nomes.length] = "Ruan";
//nomes[nomes.length] = "José";
//nomes[nomes.length] = "sa";
//nomes[nomes.length] = "dd";
//nomes[3] = 'José';
//nomes[0] = 'Ruan';


