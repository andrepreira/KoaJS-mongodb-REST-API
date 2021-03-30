const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

//require('./mongo')(app); // CONECTION WITH DATABASE

//Use the bodyparser middlware
app.use(BodyParser());
app.use(logger());

router
    .get("/",  (ctx) => {
    ctx.body = '<h1>Você está na HOME</h1>'
})
    .get('/contato', (ctx) => {
        ctx.body =  `
                    <h1>Contato</h1>
                    <form action='/contato' method='POST'>
                        <label for='email'>Email:</label>
                        <input type='email' name='email' id='email'> 

                        <label for='mensagem'>Mensagem:</label>
                        <textarea name='mensagem' id='mensagem'></textarea>
                        <input type='submit' value='Enviar'>
                    </form>                    
                    `
    })
    .post('/contato', (ctx) => {
        ctx.body = '<h1>Conexão com o banco de dados</h1>'
    })



app.use(router.routes());

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
    console.log('Para derrubar o servidor presione ctrl+C')
});