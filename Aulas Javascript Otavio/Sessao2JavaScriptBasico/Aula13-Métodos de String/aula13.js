//               012345678
let umaString = 'Meu valor';

// length - retorna o comprimento da string

// Caractere de escape \
console.log(umaString.charAt(-1)); // charAt(): retorna o caractere na posição indicada (índice -1 retorna vazio, pois começa em 0)
console.log(umaString.charCodeAt(4)); // charCodeAt(): retorna o código Unicode/ASCII do caractere na posição indicada (pos 4 = 'a')
console.log(umaString.concat(' ', 'ei', ' ', 'sister')); // concat(): concatena strings (combina múltiplas strings em uma, raramente usado)
console.log(umaString.indexOf('e', 0)); // indexOf(): retorna o índice da primeira ocorrência do caractere 'e' a partir da posição 0
console.log(umaString.lastIndexOf('e', umaString.length)); // lastIndexOf(): retorna o índice da última ocorrência do caractere 'e'
console.log(umaString.match(/[A-Za-z]+/g)); // match(): retorna um array com as letras encontradas usando regex (g = global, todas as ocorrências)
console.log(umaString.search(/[a-z]+/g)); // search(): retorna o índice da primeira ocorrência que corresponde à regex (letras minúsculas)
console.log(umaString.replace(/e/g, '3')); // replace(): substitui todas as ocorrências de 'e' por '3' (g = global)
console.log(umaString.slice(2, 7)); // slice(): extrai uma parte da string do índice 2 ao 7 (não inclui o 7)
console.log(umaString.slice(-3, -1)); // slice(): extrai do índice -3 (penúltimo) até -1 (antes do último caractere)
console.log(umaString.split(' ', 2)); // split(): divide a string por espaços, retorna um array com no máximo 2 elementos
console.log(umaString.toUpperCase()); // toUpperCase(): converte toda a string para maiúsculas
console.log(umaString.toLowerCase()); // toLowerCase(): converte toda a string para minúsculas
