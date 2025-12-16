function formatarDinheiro(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}
console.log(formatarDinheiro(0.3000004));
