const Usuario = require('../models/usuarios')
const UsuariosDAO = require ('../DAO/usuario-dao')


module.exports = (app, bd) => {

    const usuariosDAO = new UsuariosDAO (bd);

    app.get('/user', (req, res) => {

        usuariosDAO.listaUsuarios()
        .then((usuarios)=>{
            res.send(usuarios);
        })
        .catch((erro)=>{
            res.send(erro)
        })
        /*bd.all("SELECT * FROM USUARIOS;", (error, linhas)=>{
            if (error) throw new Error ("Erro ao consultar tabela");
            else res.send(linhas);
          });*/
    });

    app.get('/user/:id', (req, res) => {
        bd.run(
            "SELECT * FROM USUARIOS WHERE ID = ?", req.params.id,
            function(erro, resultado){
                if(erro){
                    throw new Erro(`Erro ao inserir ${erro}`)
                } else {
                    res.json({resultado})
                }
            }
        )
    });    

    app.post('/user', (req, res) => {
        bd.run(
            "INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", [ req.body.nome, req.body.email, req.body.senha],
            function (err){
                if (err){
                    throw new Error (`Erro ao inserir: ${err}`)
                } else {
                    res.send ("Usuario adicionado")
                }
            }
        )
    });

    app.delete('/user/:id', (req,res) => {
        bd.run (
        "DELETE FROM USUARIOS WHERE ID = ?", req.params.id,
        function(erro){
            if (erro){
                throw new Erro (`Erro ao deletar ${erro}`)
            } else {
                res.send ("Usuário deletado")
            }
        })
    });

    app.put('/user/:id', (req,res)=> {
        bd.run(
            "UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?", [req.body.nome, req.body.email, req.body.senha, req.params.id],
            function(erro){
                if(erro){
                    throw new Erro(`Erro ao atualizar ${erro}`)
                } else {
                    res.send ("Usuário atualizado")
                }
            }
        )
    });
    }