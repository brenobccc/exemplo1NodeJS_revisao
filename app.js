const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');
//Define o IP e a Porta que a aplicação vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//Implementação de regra de negócio
const server = http.createServer((req, res) => {

    let resposta;
    const urlParse = url.parse(req.url, true);
    const params = queryString.parse(urlParse.search);
    console.log(params);
    //Criar usuario
    if (urlParse.pathname == '/criar-usuario') {


        // ||||| Salvar informacoes e atualizar usuário |||||

        //argumento do writeFile: nome_do_arquivo/caminho, conteúdo que ficará dentro do arquivo, função de callback
        //função de callback, o que é: ele irá(in this case) gravar o arquivo com o conteúdo passado, logo 
        //após irá retornar algo ao fim da execução deste função, ou seja: se tiver funcionado perfeitamente,
        fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err) throw err;
            console.log('Saved');
            resposta = "Usuário criado com Sucesso!!"


            res.statusCode = 200;//Códig
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
        });




    } else if (urlParse.pathname == '/selecionar-usuario') {//Selecionar usuari
        fs.readFile("users/" + params.id + ".txt", function (err, data) {
            resposta = data;


            res.statusCode = 200;//Códig
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
        })

    }
    //receber informações do usuario






    //Pesquisar(get)




    //Remover usuario


});

// Onde o código começa a executar
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})