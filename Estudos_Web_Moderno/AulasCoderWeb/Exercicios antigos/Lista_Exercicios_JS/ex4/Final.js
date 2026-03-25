const idades = [15, 18, 14, 24, 12, 30, 10, 5]

const resultado = idades.filter(idade => idade >= 14).map(idades => {
    if (idades>=14 && idades<= 17){
        return 'meia entrada'
    } else if (idades >= 18){
        return 'inteira'
    }
})

console.log(resultado)