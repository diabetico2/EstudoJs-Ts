const produto = { nome: 'Teclado', preco: 200 };

Object.entries(produto).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Saída:
// nome: Teclado
// preco: 200