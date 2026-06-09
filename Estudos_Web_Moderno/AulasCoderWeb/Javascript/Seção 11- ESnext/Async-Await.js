const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => { 
        resultado += dados;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

//recurso do ES8
//Objetivo de simplificar o uso de promises
// O 'async' avisa ao JavaScript que esta função lida com processos demorados (assíncronos)
// e garante que ela SEMPRE retornará uma Promise automática envelopando o resultado final.
let obterAlunos = async () => {
    
    // O 'await' funciona como um botão de "pausa". Ele trava a execução desta função específica
    // e espera a Promise do 'getTurma' ser resolvida. 
    // Só quando a Turma A terminar de chegar, o código vai para a linha de baixo.
    const ta = await getTurma('A'); // Busca os alunos da turma A
    
    const tb = await getTurma('B'); // Busca os alunos da turma B (espera a A terminar)
    
    const tc = await getTurma('C'); // Busca os alunos da turma C (espera a B terminar)
    
    // O '[].concat(...)' cria um array vazio e "funde" os três arrays (ta, tb, tc) nele.
    // Em vez de você ter três listas separadas, agora você tem uma única grande lista com todos os alunos.
    return [].concat(ta, tb, tc);
};

// --- Executando o Fluxo ---

obterAlunos()
    // O primeiro .then() recebe o grande array de alunos que a função 'obterAlunos' enviou.
    // Ele usa o .map() para "espremer" os objetos e criar uma nova lista contendo APENAS os nomes.
    .then(alunos => alunos.map(a => a.nome))
    
    // O segundo .then() recebe o resultado do .map() anterior (um array puramente de strings).
    // Ele simplesmente pega essa lista limpa de nomes e exibe no terminal.
    .then(nomes => console.log(nomes));