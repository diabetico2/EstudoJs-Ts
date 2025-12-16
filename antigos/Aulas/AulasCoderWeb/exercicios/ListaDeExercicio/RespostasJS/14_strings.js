function compararStrings(s1, s2) {
    return s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
}
console.log(compararStrings("Amor", "Roma"));
