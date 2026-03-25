const escola = "cod3r";
console.log(escola.charAt(4)); // * isso vai mostrar qual letra estará na posição 4
console.log(escola.charCodeAt(3));
// * pega o valor relacionado a ele em relação a tabela unicode https://symbl.cc/pt/unicode-table
console.log(escola.indexOf("3"));
console.log(escola.substring(1)); // * Imprimi a posição da frente daonde a letra escolhida está,
// * no caso de "cod3r", ele imprimi "od3r"
console.log(escola.substring(0, 3)); // * onde começa e onde termina

console.log("Escola ".concat(escola).concat("!")); // * Ambos juntam as palavras
console.log("Escola " + escola + "!"); // * Ambos juntam as palavras
console.log(escola.replace(3, "e")); // * substitui a letra na posição escolhida
console.log("Allan, Jose, Pereira".split(","));
