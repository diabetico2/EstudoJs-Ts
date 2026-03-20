contador = 0;

const timer = setInterval(function(){
    console.log(contador++)

    if(contador === 5){
        clearInterval(timer)
        console.log('paro')
    }
},1000)