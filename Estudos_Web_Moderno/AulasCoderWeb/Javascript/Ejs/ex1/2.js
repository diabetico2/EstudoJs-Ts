const salarios = [1500, 12000, 8000, 17000, 5000];

// Como ficaria a função de filtro aqui?
const ehAlto = (s) => {
    return s > 10000
}
const salariosAltos = salarios.filter(ehAlto)

console.log(salariosAltos)