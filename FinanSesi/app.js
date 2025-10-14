const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();


//Configurando o motor de vizualização EJS
app.set('view engine', 'ejs');
//Configurando a pasta para os arquivos estáticos
app.use(express.static('public'));

//Definindo o layout padrão da nossa pagina
app.use(expressLayouts)
app.set('layout', 'layouts/principal')

//para processar e receber os dados dos formularios 
app.use(express.urlencoded({extended:true}));

//Rota principal do site
app.get('/', (req, res) => {

    //Buscando o arquivo index.ejs na pasta views    
    res.render('index');

});
app.get('/sobre', (req,res) => {
    res.render('sobre')
})
app.get('/juros_simples.ejs', (req,res) => {
    res.render('juros_simples')
})
app.get('/juros_composto.ejs', (req,res) => {
    res.render('juros_composto')
})
app.post('/juros_simples', (req,res) => {
    //recebndo os dados do campo do formulário
   const capital = req.body.capital;
   const Taxa = req.body.Taxa;
   const Tempo = req.body.Tempo;
   const juros =(capital*Taxa*Tempo) / 100;
   const total = Number(capital) + Number(juros);

   res.render('juros_simples', {capital,Taxa,Tempo,juros,total});

})
app.post('/juros_composto', (req,res) => {

   const capital = req.body.capital;
   const Taxa = req.body.Taxa;
   const Tempo = req.body.Tempo;
   const juros =(capital * (1 + Taxa/ 100) ** Tempo) - capital;
   const total = Number(capital) + Number(juros);

   res.render('juros_composto', {capital,Taxa,Tempo,juros,total});

})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);

});
