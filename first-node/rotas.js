const express = require('express');    //Para requisitar o express.js  
const app = express();  //Chama a função express, para o arquivo rodar 

app.get('/', (req, res) => {     //A função .get() guia as rotas
    res.send("Meu novo Mundo")     // Envia mensagens para a página, só pode ser usado uma vez.
})
app.get('/contato', function(req, res){
    res.send("0800 3337-7777 ULTRAGAZ!")
})
app.get('/sobre', (req, res) => {  //Posso declarar a função dessa forma também utilizando a setinhs
    res.sendFile(__dirname + "/html/sobre.html")  //a variável __dirname refere-se ao caminho que o arquivo está guardado
})  //res.sendFile(): Envia arquivos
app.get('/fale-conosco', function(req, res){
    res.send("<h1>Olá, Seja Bem Vindo</h1>\n<h2>Aqui falamos com vc</h2>") //Pode utilizar tags html
})
app.get('/form/:nome/:cargo/:email', function(req,res){  //req: envia dados através de uma requisição HTTP;   a URL vai ficar assim: localhost:8090/guilherme/açougueiro/edgamapontocom
    //res.send(req.params)   //Exibirá os parametros enviados na página
     res.send("Olá "+req.params.nome+"! Seu Cargo é: "+req.params.cargo+"e seu email é: "+req.params.email);
})

app.listen(8090, function(){console.log("Servidor Rodando!")});
