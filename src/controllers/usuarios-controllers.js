const usuario = require('../models/usuarios')

module.exports = (app, bd) => {
    app.get('/user', (req, res) => {
        res.send(`Rastreamento da aplicação sendo feito com nodemon`)
    })

    app.post('/user', (req, res) => {
        const usr = new Usuario (req.body.nome, req.body.email, req.body.senha)
        bd.usuarios.push(usr);
        console.log(bd)
        res.send(`Post funcionando no user`)
    })
};



