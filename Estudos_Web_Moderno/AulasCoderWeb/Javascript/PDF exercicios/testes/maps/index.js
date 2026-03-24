const array1 = [1, 4, 9, 16];

const resul = array1.map((e) => e * 2)
.filter((e) => e % 2 === 0)
.reduce((ac, e)=> ac + e)



console.log(resul)