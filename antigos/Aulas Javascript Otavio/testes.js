function myFunction(a, b) {
  const c = Number(a + b);
  if (c == a || c == b) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunction(2, 3));
// expected: false
console.log(myFunction(1, "1"));
// expected: false
console.log(myFunction("10", "10"));
// expected: true
