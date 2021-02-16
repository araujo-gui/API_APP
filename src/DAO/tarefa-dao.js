module.exports = class TarefasDAO {

    constructor(db){
        this.db = db;
    }
    //OK
    listaTarefas(){
        return new Promise ((resolve, reject)=> {
            this.db.all("SELECT * FROM TAREFAS", (error, linhas)=>{
                if (error) reject("Erro ao consultar tarefas");
                else resolve(linhas);
            })
        })
    }
    //OK
    listaTarefaParams(tarefaParams){
        return new Promise((resolve, reject)=>{
            this.db.all("SELECT * FROM TAREFAS WHERE ID = ?", tarefaParams, (error, linhas)=>{
                if(error) reject(error);
                else resolve(linhas)
            } )
        })
    }
    //OK
    inserindoTarefas(adicionandoTarefa){
        return new Promise((resolve,reject)=>{
            this.db.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", adicionandoTarefa, (error)=>{
                if(error) reject("Erro ao inserir tarefas")
                else resolve ("Tarefa adicionada")
            })
        })
    }
    //OK
    deletandoTarefas(deletaTarefa){
        return new Promise((resolve, reject)=>{
            this.db.run("DELETE FROM TAREFAS WHERE ID = ?", deletaTarefa, (error)=>{
                if(error) reject("Erro ao deletar tarefas")
                else resolve ("Tarefa deletada")
            })
        })
    }
    //OK
    atualizandoTarefa(atualizarTarefa){
        return new Promise((resolve, reject)=>{
            this.db.run("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE ID = ?", atualizarTarefa, (error)=>{
                if(error) reject(error)
                else resolve ("Tarefa atualizada")
            })
        })
    }
}