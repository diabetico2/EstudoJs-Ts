const schedule = require("node-schedule");

// Trocamos o '14' por '*' para rodar em qualquer hora
// Formato: (segundo, minuto, hora, dia do mês, mês, dia da semana)
const tarefa1 = schedule.scheduleJob("*/5 * * * * 3", function(){
    console.log('Executando tarefa 1', new Date().getSeconds())
});

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000) // 20 segundos corrigidos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 15 // Ajustado para 15h (seu horário atual)
regra.second = 3 // Vai rodar no segundo 3 de cada minuto das 15h

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})