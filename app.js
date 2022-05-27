const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');
//Define o IP e a Porta que a aplicação vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//Implementação de regra de negócio
const server = http.createServer((req, res) => {

    //Criar usuario
    //receber informações do usuario
    const params = queryString.parse(url.parse(req.url, true).search);
    console.log(params);
    //Salvar informacoes

    //argumento do writeFile: nome_do_arquivo/caminho, conteúdo que ficará dentro do arquivo, função de callback
    //função de callback, o que é: ele irá(in this case) gravar o arquivo com o conteúdo passado, logo 
    //após irá retornar algo ao fim da execução deste função, ou seja: se tiver funcionado perfeitamente,
    //irá retornar o resultado esperado, caso não tiver funcionado como esperado, irá retornar um erro.
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
        if (err) throw err;
        console.log('Saved');
    });

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