const nomes = ["ana", "bia", "leo", "gui"]

const resul = nomes.map(function(e){
    return {
        nomes: e.toUpperCase(),
        status: "VIP"
    }
})

console.log(resul)