function triangulo(a, b, c) {
    if (a == b && b == c) return 'Equilatero';
    if (a == b || b == c || a == c) return 'Isosceles';
    return 'Escaleno';
}
console.log(triangulo(2, 2, 2));
