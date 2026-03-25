function area(altura, largura) {
  const area = altura * largura;
  if (area > 20) {
    console.log(`valor acima do permitido ${area}`);
  } else {
    return area;
  }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,17,22,44))
console.log(area(20,20))