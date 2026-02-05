function verificaVelocidade(V){
    if ( V <= 60){
        console.log('dentro do limite')
    } else if (V > 60 && V <= 80){
        console.log('multa leve')
    } else if (V >= 81){
        console.log('multa grave')
    }
}

verificaVelocidade(77)