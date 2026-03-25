const somarTudo = (numeros) => {
   return numeros.reduce((act,at) => act + at,0)
}

console.log(somarTudo([10, 20, 30])) // Tem que dar 60