//incluindo biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');


//Define o IP e a Porta que a aplicação vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//Implementação de regra de negócio
const server = http.createServer((req, res) => {

    //Pega a pergunta na URL
    const params = queryString.parse(
        url.parse(req.url, true).search
    );
    // console.log("Parametros:",params);
    let resposta;
    //Verificar a pergunta e escolher uma respota
    if(params.pergunta == 'melhor-filme'){
        resposta = 'one piece';
    }else if(params.pergunta == 'melhor-tecnologia-backend'){
        resposta = 'nodejs';
    }else{
        resposta = 'nao sei';
    }

    //Retornar a respot escolhida

    res.statusCode = 200;//Códig
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');
    // res.end(params.pergunta);
    res.end(resposta);
});

// Onde o código começa a executar
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})