// function* geradora1() {
//   //codigo qualquer
//   yield "Valor1";
//   //codigo qualquer
//   yield "Valor2";
//   //codigo qualquer
//   yield "Valor3";
// }
// const g1 = geradora1();
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value) // sem resultado

// for (let valor of g1) {
//   console.log(valor);
// }

// function* geradora2() {
//   let i = 0;
//   while (true) {
//     yield i;
//     i++;
//   }
// }
// const g2 = geradora2()
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

// for (let valor of g2) { ele fica infinito,  não faça isso
//    console.log(valor);
//  }

// function* geradora3(){
//     yield 0
//     yield 1
//     yield 2
// }
// function* geradora4(){
//     yield* geradora3()
//     yield 3
//     yield 4
// }
// const g4 = geradora4()

// for (let valor of g4){
//     console.log(valor)
// }

function* geradora5() {
  yield function () {
    console.log("vim do y1");
  };

  yield function(){ // return impossibilida o proximo yield de funcionar
    console.log('vim do return')
  }
  yield function () {
    console.log("vim do yield2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;


func1()
func2()
func3()
