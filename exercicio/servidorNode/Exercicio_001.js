const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send('Bem-vindo!');
});


const produtos = ['Livro', 'caderno', 'Folha', 'Grampo'];

app.get("/produtos", (req, res) => {
    let html = '<h1>Lista de produtos</h1>';
    html += '<ul>';
    for (let produto of produtos) {
        html += `<li>${produto}</li>`;
    }
    html += '</ul>';
    res.send(html);
});

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produtoSel = produtos[id]

    if (produtoSel == undefined) {
        res.send(`produtos não encontrado`)
    } else {
        res.send(`Você está visualizando o item do id ${id} - o item é ${produtoSel}`)
    }

});

app.get(`/total/:id_produto/:preco/:qntd`, (req,res) =>{
    const id_produto = Number(req.params.id_produto)
    const preco = Number(req.params.preco)
    const qntd = Number(req.params.qntd)
    const resultado = (id_produto + (preco * qntd));
    res.send(`${id_produto} + ${preco} * ${qntd}= ${resultado}`)
});

app.get('/menu', (req, res) =>{
    let html =`
    <h1>menu</h1>
    <a href="/">🏠Principal</a> <br>
    <a href="/produtos">🛒Produtos</a> <br>
    <a href="/usuario/1">🔊Produto 1</a> <br>
    <a href="/usuario/7">🔈 Produto invalido</a> <br>
    <a href="/soma/16/48">🎇Total🎇</a> <br>
   
`;
})


const porta = 3001;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});



















