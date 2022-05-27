const http = require('http');
const url = require('url');
const queryString = require('query-string')
//Define o IP e a Porta que a aplicação vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//Implementação de regra de negócio
const server = http.createServer((req, res) => {

    //Criar usuario
        //receber informações do usuario
        const usuario = queryString.parse(url.parse(req.url, true).search);
        console.log(usuario);
        //Salvar informacoes


    //Atualizar usuario
    //Pesquisar(get)
    //Remover usuario


    res.statusCode = 200;//Códig
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world!!");
});

// Onde o código começa a executar
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})