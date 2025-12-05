function calculadora(v1, op, v2) {
    switch (op) {
        case '+': return v1 + v2;
        case '-': return v1 - v2;
        case '*': return v1 * v2;
        case '/': return v1 / v2;
        default: return 'Operacao invalida';
    }
}
console.log(calculadora(2, '+', 3));
