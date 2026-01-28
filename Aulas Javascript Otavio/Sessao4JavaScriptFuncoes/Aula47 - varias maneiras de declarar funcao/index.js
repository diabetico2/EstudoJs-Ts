// declarar a  (function hoisting)
falaOi()
function falaOi(){
    console.log('olá');
}
falaOi() 


// first-class objects (objetos de primeira classe)
// funcion expressio
const souUmDado = function(){
    console.log('sou dado')
};

souUmDado()

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo')
    funcao()
}
executaFuncao(souUmDado)
// arrow function
const funcaoArrow = () =>{
    console.log('sou uma arrow function')
};
funcaoArrow()

// dentro de um objeto posso ter uma funcao

const obj = {
    falar: function(){
        console.log('a')
    }
}
obj.falar()