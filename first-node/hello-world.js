//Abrindo um servidor^^
const http = require('http')

http.createServer(function(req, res){
        res.end("Olá")  

}).listen(8090)  //É a porta que o servidor vai escutar