const resultado = document.querySelector("#resultado");
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sabado";
      return diaSemanaTexto;
  }
}
function getMesTexto(numeroMes){
    let mesTexto
    switch(numeroMes){
        case 0:
            mesTexto = "Janeiro"
        return mesTexto
        case 1:
            mesTexto = "Fevereiro"
        return mesTexto
        case 2:
            mesTexto = "Março"
        return mesTexto
        case 3:
            mesTexto = "Abril"
        return mesTexto

        case 4:
            mesTexto = "Maio"
        return mesTexto
        case 5:
            mesTexto = "Junho"
        return mesTexto
        case 6:
            mesTexto = "Julho"
        return mesTexto
        case 7:
            mesTexto = "Agosto"
        return mesTexto

        case 8:
            mesTexto = "Setembro"
        return mesTexto
        case 9:
            mesTexto = "Outubro"
        return mesTexto
        case 10:
            mesTexto = "Novembro"
        return mesTexto
        case 11:
            mesTexto = "Dezembro"
        return mesTexto
    }
}
const data = new Date();
let diaSemana = data.getDay();
let numeroMes = data.getMonth();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const mesTexto = getMesTexto(numeroMes);

let horario = new Date()
const horas = horario.getHours()
const minutos = horario.getMinutes()

const HoraFormatados = horas < 10 ? '0'+ horas:horas;
const MinutosFormatados = minutos < 10 ? '0'+ minutos:minutos;

console.log(data.getMonth)

resultado.innerHTML = `Hoje e ${diaSemanaTexto}, do dia ${data.getDate()} do mês de ${mesTexto} de  ${data.getFullYear()} ${HoraFormatados}:${MinutosFormatados}`;
