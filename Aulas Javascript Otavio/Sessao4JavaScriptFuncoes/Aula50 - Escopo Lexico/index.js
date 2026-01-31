const nome = 'Luiz'

function falaNome(){
    const nome = 'sergio'
    console.log(nome)// ele sempre pega o primeiro de cima, mass nunca nada abaixo dele
}

function usaFalaNome(){
        const nome = 'otavio'
    falaNome()
}
usaFalaNome()