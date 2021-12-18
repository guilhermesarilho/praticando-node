
//Exibi o status da memória;
const os = require('os');    //Para requisitar um módulo, deve utilizar require('modulo')

setInterval(() => {    //A função de callback SetInterval() serve para...(continuee)
    const {freemem, totalmem} = os

    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const perc = parseInt((total / mem) * 100);
   
    const stats = {
        Livres: `${mem} MB`,
        Total: `${total} MB`,
        Usados: `${perc} %`
    }

console.clear() 
console.log("     == Status ==")
console.table(stats)  //Mostra em formato de tabela

},1000)   // A cada 1 segundo o callback é relogada