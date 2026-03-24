const contarEspacos = function (v) {
  const array = [...v];
  const form = array.filter((e) => e === " ");
 return form.length;
};
console.log(contarEspacos("olá tudo bem"));
