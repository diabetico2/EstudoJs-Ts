function terminar(callback) {
  console.log("Terminei!")

  callback()
}

terminar(() => {
  console.log("Agora faça outra coisa")
})