velocidades = [55, 90, 75, 60, 120, 80]

for (let i = 0; i < velocidades.length; i++){
    console.log(`Índice ${i}`, velocidades[i]);
    function verificaVelocidade(){
    if ( velocidades[i] <= 60){
        console.log('dentro do limite')
    } else if (velocidades[i] > 60 && velocidades[i] <= 80){
        console.log('multa leve')
    } else if (velocidades[i] >= 81){
        console.log('multa grave')
    }
}
verificaVelocidade()
}