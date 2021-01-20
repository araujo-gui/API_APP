module.exports = (app) => {
    app.get('/tarefas', (req, res) => {
        res.send(`Tarefas está funcionando`)
    })

    app.post('/tarefas', (req, res) => {
        console.log(req.body)
        res.send(`Post funcionando em tarefas`)
    })
};