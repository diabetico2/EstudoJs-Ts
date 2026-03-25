function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)

const aula2 = new Aula('Até breve', 456)
console.log(aula1,aula2)



// simulando o new
function novo(f, ...params){
    const obj = {};
    
    // CORREÇÃO: Usamos o "setter" para mudar o protótipo do obj para f.prototype
    Object.setPrototypeOf(obj, f.prototype); 
    
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'bem vindo', 123);
console.log(aula3);