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
    //Ver porque não está puxando id isolado.
    listaTarefaParams(tarefaParams){
        return new Promise((resolve, reject)=>{
            this.db.all("SELECT * FROM USUARIOS WHERE ID = ?", tarefaParams, (error, linhas)=>{
                if(error) reject("Erro ao acessar tarefas");
                else resolve(linhas)
            } )
        })
    }
    //Verificar erro no adicionar tarefas
    inserindoTarefas(adicionandoTarefa){
        return new Promise((resolve,reject)=>{
            this.db.all("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATADACRIACAO) VALUES (?, ?, ?, ?)", adicionandoTarefa, (error)=>{
                if(error) reject("Erro ao adicionar tarefas")
                else resolve ("Tarefa adicionada")
            })
        })
    }
    //Verificar erro em deletar
    deletandoTarefas(deletaTarefa){
        return new Promise((resolve, reject)=>{
            this.db.all("DELETE FROM TAREFAS WHERE ID = ?", deletaTarefa, (error)=>{
                if(error) reject("Erro ao deletar tarefas")
                else resolve ("Tarefa deletada")
            })
        })
    }
    //verificar erro para atualizar
    atualizandoTarefa(atualizarTarefa){
        return new Promise((resolve, reject)=>{
            this.db.all("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, WHERE ID = ?", atualizarTarefa, (error)=>{
                if(error) reject("Erro ao atualizar tarefas")
                else resolve ("Tarefa atualizada")
            })
        })
    }
}