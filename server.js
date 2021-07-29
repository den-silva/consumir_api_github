// IMPORTAR DEPENDÊNCIAS
const express = require('express')
const path  = require('path')

// CONFIGURAÇÕES INICIAIS
const app = express()
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));

// ESTABELECER ROTAS

app.get('/', (req, res)=>{
    res.render ('index')
})

// INICIAR O SERVIDOR

app.listen(3000, () =>{
    console.log('Server rodando!')
})
//http:localhost:3000/