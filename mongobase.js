const mongoose = require('mongoose');
//Conectando MongoDB
mongoose.connect('mongodb://localhost/aprendendo', {  // o mongoose vai criar um bdd chamado "aprendendo"
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("mongoDB conectado!")
}).catch((err) => {
    console.log("Ocorreu um erro: "+err)
})
//Config mongoose
mongoose.Promise = global.Promise;

//Criando Campos
const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    Nacionalidade: {
        type: String
    }

})

    mongoose.model('usuarios', userSchema)    //Vai guardar os dados na tabela "usuarios"

    const user = mongoose.model('usuarios') 

    new user({
        nome: "Guilherme",
        sobrenome: "Borges",
        email: "guilherme@gmail.com",
        idade: 19,
        Nacionalidade: "brasileiro"
}).save().then(() => {  //Para inserir no banco de dados devemos utilizar a função .save()
    console.log("Usuario criado com sucesso!")
}).catch((err) => {
    console.log("Ocorreu um erro"+err)
})
