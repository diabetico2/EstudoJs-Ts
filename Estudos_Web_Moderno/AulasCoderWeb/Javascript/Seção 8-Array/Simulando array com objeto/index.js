const qa = { 0: "Rafa", 1: "Ana", 2: "Bia" };
console.log(qa);

Object.defineProperty(qa, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerator: false,
});

console.log(qa[0]);

const ma = ['rafa', 'Ana', 'Bia']

console.log(qa.toString(), ma)