const nome = ["Luiz", "Otavio", "henrique"];

// -------------------------------------------------------
// 1. FOR CLÁSSICO (O "Manual")
// -------------------------------------------------------
// Você cria uma variável de controle (i), diz até onde ela vai (length)
// e como ela aumenta (i++). É o que te dá mais controle.
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]); // Precisa usar nome[i] para pegar o valor
}

console.log("///");

// -------------------------------------------------------
// 2. FOR IN (Lê os ÍNDICES)
// -------------------------------------------------------
// O "IN" lê as chaves do objeto ou índices do array.
// Aqui, o 'i' vale "0", "1", "2"... (as posições).
for (let i in nome) {
  // Como 'i' é só o número da posição, você ainda precisa fazer nome[i]
  console.log(nome[i]); 
}

console.log("///");

// -------------------------------------------------------
// 3. FOR OF (Lê os VALORES)
// -------------------------------------------------------
// O "OF" vai direto ao ponto. Ele pega o conteúdo de dentro da caixa.
// A variável 'valor' já é "Luiz", "Otavio"...
for (let valor of nome) {
  console.log(valor); // Não precisa de colchetes [], o valor já está na mão
}

console.log('///')

// -------------------------------------------------------
// 4. FOREACH (O Método Específico de Arrays)
// -------------------------------------------------------
// É uma função feita só para Arrays. Ele passa item por item.
// A vantagem é que ele te entrega o Valor, o Índice e o Array completo
// automaticamente nos parâmetros da função.
nome.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice); // Ex: "Luiz" 0
});