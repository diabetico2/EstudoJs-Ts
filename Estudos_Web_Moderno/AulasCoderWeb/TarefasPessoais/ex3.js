const valores = [10, 20, 30, 40]

const reduzir = (f,att) => f += att

const resul = valores.reduce(reduzir)
console.log(resul)