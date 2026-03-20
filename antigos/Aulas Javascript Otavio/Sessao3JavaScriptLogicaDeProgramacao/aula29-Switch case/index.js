// switch case
let corFavorita = "verde";

switch (corFavorita) {
    case "azul":
        console.log("Olhe para o céu.");
        break;
    case "amarelo":
        console.log("Olhe para o sol.");
        break;
    case "verde":
        console.log("Olhe para a floresta.");
        break;

    default:
        console.log("Feche os olhos.");
}
// manipulando datas
const data = new Date();
const diaSemana = data.getDay();

switch (diaSemana) {
    case 0: 
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}