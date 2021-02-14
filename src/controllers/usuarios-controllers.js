const Usuario = require('../models/usuarios')
const UsuariosDAO = require('../DAO/usuario-dao')

module.exports = (app, bd) => {

    const usuariosDAO = new UsuariosDAO(bd);
    //OK
    app.get('/user', async (req, res) => {
        try {
            const usuarios = await usuariosDAO.listaUsuarios()
            res.send(usuarios);
        }
        catch (erro) {
            res.send(erro)
        }
    });
    //OK
    app.get('/user/:id', async(req, res) => {
        try{
            const usuarioParametro = await usuariosDAO.listaUsuarioParams(req.params.id)
            res.send(usuarioParametro)
        }
        catch(erro){
            res.send(erro)
        }
    });
    //OK
    app.post('/user', async (req, res) => {
        try {
            const inserirUsuario = await usuariosDAO.inserindoUsuarios([req.body.nome, req.body.email, req.body.senha])
            res.send(inserirUsuario)
        }
        catch (erro) {
            res.send(erro)
        }
    });
    //OK
    app.delete('/user/:id', async (req, res) => {
        try {
            const deletarUsuario = await usuariosDAO.deletandoUsuarios(req.params.id)
            res.send(deletarUsuario)
        }
        catch(erro){
            res.send(erro)
        }
    });
    //OK
    app.put('/user/:id', async(req, res) => {
        try {
            const atualizaUsuario = await usuariosDAO.atualizandoUsuario([req.body.nome, req.body.email, req.body.senha, req.params.id])
            res.send(atualizaUsuario)
        }
        catch(erro){
            res.send(erro)
        }
    });
}

