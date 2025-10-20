//*Primeira forma de fazer, parecido com a minha:

// const h1 = document.querySelector(".container h1");
// const data = new Date();
// h1.innerHTML = data.toString();

// function getDiaSemanaTexto(diaSemana) {
//   let diaSemanaTexto;
//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "Segunda";
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = "Terça";
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = "Quarta";
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = "Quinta";
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = "Sexta";
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = "Sabado";
//       return diaSemanaTexto;
//   }
// }
// function getNomeMes(numeroMes) {
//   let mesTexto;
//   switch (numeroMes) {
//     case 0:
//       mesTexto = "Janeiro";
//       return mesTexto;
//     case 1:
//       mesTexto = "Fevereiro";
//       return mesTexto;
//     case 2:
//       mesTexto = "Março";
//       return mesTexto;
//     case 3:
//       mesTexto = "Abril";
//       return mesTexto;

//     case 4:
//       mesTexto = "Maio";
//       return mesTexto;
//     case 5:
//       mesTexto = "Junho";
//       return mesTexto;
//     case 6:
//       mesTexto = "Julho";
//       return mesTexto;
//     case 7:
//       mesTexto = "Agosto";
//       return mesTexto;

//     case 8:
//       mesTexto = "Setembro";
//       return mesTexto;
//     case 9:
//       mesTexto = "Outubro";
//       return mesTexto;
//     case 10:
//       mesTexto = "Novembro";
//       return mesTexto;
//     case 11:
//       mesTexto = "Dezembro";
//       return mesTexto;
//   }
// }
// function zeroEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }
// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();
//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const mesTexto = getNomeMes(numeroMes);
//   console.log(nomeDia, mesTexto);
//   return `${nomeDia} ${data.getDate()} ${mesTexto} ${data.getMonth()} de ${data.getFullYear()} ${zeroEsquerda(
//     data.getHours()
//   )}:${zeroEsquerda(data.getMinutes())}`;
// }
// h1.innerHTML = criaData(data);

//! Segunda forma de fazer, mais otimizada em poucas linhas
const h1 = document.querySelector('.container h1');
const data = new Date();

// CORREÇÃO: Mude para toLocaleString() para permitir a opção timeStyle.
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'full' });

//*Terceira forma de fazer, também util, utilizando arrays
// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
//     'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[numeroMes];
// } 