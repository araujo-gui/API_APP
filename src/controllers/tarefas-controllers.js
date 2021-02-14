const Tarefa = require('../models/tarefas')
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

    //Verificar porque não está puxando ID isolado.
    app.get('/tarefas/:id', async (req, res) => {
        try {
            const tarefaParametro = await tarefaDAO.listaTarefas(req.params.id)
            res.send(tarefaParametro)
        }
        catch (erro) {
            res.send(erro)
        }
    });
    //Verificar o erro ao inserir usuário
    app.post('/tarefas', async (req, res) => {
        try {
            const inserirTarefas = await tarefaDAO.inserindoTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao])
            res.send(inserirTarefas)
        }
        catch (erro) {
            res.send(erro)
        }
    })

    //verificar erro para deletar
    app.delete('/tarefas/:id', async(req, resp) => {
        try{
            const deletarTarefas = await tarefaDAO.deletandoTarefas(req.params.id)
            res.send(deletarTarefas)
        }
        catch(erro){
            res.send(erro)
        }
    });

    //verificar erro para atualizar
    app.put('/tarefas/:id', async(req, res) => {
        try{
            const atualizaTarefa = await tarefaDAO.atualizandoTarefa([req.body.titulo, req.body.descricao,  req.body.status, req.body.datacriacao, req.params.id])
            res.send(atualizaTarefa)
        }
        catch(erro){
            res.send(erro)
        }
    })
};