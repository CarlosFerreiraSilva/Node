const mongoose = require("mongoose");

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/bancoTeste",{
useNewUrlParser: true 
}).then(()=>{
 console.log("Banco conectado com sucesso!!!")

}).catch((err)=>{
console.log("Houve um erro ao se conectar ao banco:" +err)

})
// Model - Usuários
// Definindo o Model
const UsuarioSchema = mongoose.Schema({
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
    pais: {
        type: String
    }
})
// Collection
mongoose.model('usuarios', UsuarioSchema )

const Carlos = mongoose.model('usuarios')
new Carlos({
    nome: "Victor",
    sobrenome: "Lima",
    email: "email@email.com",
    idade: 19,
    pais: "Brasil"
}).save().then(() => {
console.log("Usuario criado com sucesso!")
}).catch((erro) => {
console.log("Houve um erro ao registrar o usuário: " + erro)
})