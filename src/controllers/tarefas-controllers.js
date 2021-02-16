//const Tarefa = require('../models/tarefas')
const TarefasDAO = require('../DAO/tarefa-dao')

module.exports = (app, bd) => {

    const tarefaDAO = new TarefasDAO(bd)
    //OK
    app.get('/tarefas', async (req, res) => {
        try {
            const tarefas = await tarefaDAO.listaTarefas()
            res.send(tarefas)
        }
        catch (erro) {
            res.send(erro)
        }
    })

    //OK
    app.get('/tarefas/:id', async (req, res) => {
        try {
            const tarefaParametro = await tarefaDAO.listaTarefaParams(req.params.id)
            res.send(tarefaParametro)
        }
        catch (erro) {
            res.send(erro)
        }
    });
    //OK
    app.post('/tarefas', async (req, res) => {
        try {
            const inserirTarefas = await tarefaDAO.inserindoTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario])
            res.send(inserirTarefas)
        }
        catch (erro) {
            res.send(erro)
        }
    })

    //OK
    app.delete('/tarefas/:id', async(req, res) => {
        try{
            const deletarTarefas = await tarefaDAO.deletandoTarefas(req.params.id)
            res.send(deletarTarefas)
        }
        catch(erro){
            res.send(erro)
        }
    });

    //Ok
    app.put('/tarefas/:id', async(req, res) => {
        try{
            const atualizaTarefa = await tarefaDAO.atualizandoTarefa([req.body.titulo, req.body.descricao,  req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id])
            res.send(atualizaTarefa)
        }
        catch(erro){
            res.send(erro)
        }
    })
};