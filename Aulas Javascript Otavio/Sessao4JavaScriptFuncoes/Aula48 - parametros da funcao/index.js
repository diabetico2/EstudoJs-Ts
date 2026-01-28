// //arguments que sustenta todos os arumentos enviados
// function funcao([v1,v2,v3] ) {
//   //   let total = 0
//   //   for (let argumento of arguments){
//   //     total += argumento
//   //   }
//   //   console.log(total, a,b,c)
//   // console.log(a,b,c,d,e,f)

//   console.log(v1,v2,v3);
// }

// funcao(['allan', 'jose', 20]);
// //     a  b   c

// function conta(operador, acumulador, ...numeros){
//     for (let numero of numeros){
//         if(operador === '+') acumulador += numero
//         if(operador === '-') acumulador -= numero
//         if(operador === '/') acumulador /= numero
//         if(operador === '*') acumulador *= numero
//     }
//     console.log(acumulador)
// }
// conta('*',20, 20,30,40,50)

const conta = (...args) =>{
    console.log(args)
}
conta(1,2,3,4,5)