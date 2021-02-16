module.exports = class UsuariosDAO {

    constructor(db){
        this.db = db;
    }
    //OK
    listaUsuarios(){
        return new Promise ((resolve, reject)=> {
            this.db.all("SELECT * FROM USUARIOS", (error, linhas)=>{
                if (error) reject("Erro ao consultar usuários");
                else resolve(linhas);
            })
        })
    }
    //OK
    listaUsuarioParams(usuarioParams){
        return new Promise((resolve, reject)=>{
            this.db.all("SELECT * FROM USUARIOS WHERE ID = ?", usuarioParams, (error, linhas)=>{
                if(error) reject("Erro ao acessar usuário");
                else resolve(linhas)
            } )
        })
    }
    //OK
    inserindoUsuarios(adicionandoUsuario){
        return new Promise((resolve,reject)=>{
            this.db.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", adicionandoUsuario, (error)=>{
                if(error) reject("Erro ao adicionar usuários")
                else resolve ("Usuário adicionado")
            })
        })
    }
    //OK
    deletandoUsuarios(deletaUsuario){
        return new Promise((resolve, reject)=>{
            this.db.run("DELETE FROM USUARIOS WHERE ID = ?", deletaUsuario, (error)=>{
                if(error) reject("Erro ao deletar usuários")
                else resolve ("Usuário deletado")
            })
        })
    }
    //OK
    atualizandoUsuario(atualizarUsuario){
        return new Promise((resolve, reject)=>{
            this.db.run("UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?", atualizarUsuario, (error)=>{
                if(error) reject("Erro ao atualizar usuário")
                else resolve ("Usuário atualizado")
            })
        })
    }
}