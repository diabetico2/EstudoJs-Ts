const elemento = function(...valores) {
    // Agora 'valores' já é um array: [1, 2, 3, 4, 5]
    const primeiro = valores[0]
    const ultimo = valores[valores.length - 1]
    
    return [primeiro, ultimo]
}

console.log(elemento(1, 2, 3, 4, 5)) // [1, 5]