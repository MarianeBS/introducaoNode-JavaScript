//console.log("Hello World!");

/*var n1 = 10
var n2 = 20

var totalad = n1 + n2
var totalsub = n1 - n2
var totalmult = n1 * n2
var totaldiv = n1 / n2


console.log("Total adição: " + totalad)
console.log("Total subtração: " + totalsub)
console.log("Total multiplicação: " + totalmult)
console.log("Total divisão: " + totaldiv)

if(totalad <= 10) {
    console.log("O total é menor ou igual a 10")
}else{
    console.log("O total é maior que 10")
}
*/

//Importando módulo criado no arquivo app.js
//var soma = require('./soma.js')
//var subtracao = require('./subtracao.js')
//var multiplicacao = require('./multiplicacao.js')
//var divisao = require('./divisao.js')

//console.log("Total:" + soma(10,10))
//console.log("Total:" + subtracao(10,10))
//console.log("Total:" + multiplicacao(10,10))
//console.log("Total:" + divisao(10,10))

//.listen = porta utilizada
//para abrir no browser, acessar: localhost:8081
var http = require('http')

http.createServer(function(req, res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo!")

