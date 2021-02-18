<h1 align="center"><b>TO DO API</b></h1>

<p>É um projeto de fim de módulo sobre Back-end, para a implementação de uma API.</p>

<h2>Ferramentas utilizadas:</h2>
<p>- express<br>
- body-parse<br>
- sqlite<br>
- cors</p>

<h1>Como utilizar e fazer com que funcione o projeto?</h1>
<h2>Vou te contar, chega ai! </h2>

<p><b>Para ser iniciado, utilize os seguintes comandos: </b><br>
<br>npm install -> no terminal dentro da pasta que está rodando o projeto, que instalará todas as dependências do projeto.
<br>npm start-> que dará início ao NODEMOM, facilitando a inicialiazação do servidor</p>

<h2>Agora vamos as rotas de acesso</h2>

<p>Todas as rotas utilizadas, foram criadas para a criação de uma API REST. Que tem como utilzação os verbos HTTP GET, POST, DELETE E PUT, agora vem comigo que te ensino a como utilizar cada método.</p>

<h2>GET</h2>
<p>O método GET, tem como objetivo mostrar todas as informações existentes na API.</p><br>
<p> A forma de utilizar a requisição, em tarefas ou usuários é da seguinte forma:<br>
  
  - http://localhost:8080/user <br>
  - http://localhost:8080/tarefas <br>
 
O caminhos citados acima, podem ser utilizados pelas plataformas:<br>
  - Insomnia 
  - Postman

Além disso, o método GET pode ser utilzado para que seja acessado um dado específico, por meio do ID do dado criado. 
Abaixo a forma de requisição de um dado por ID:
- http://localhost:8080/user/id <br>
- http://localhost:8080/tarefas/id <br>
</p>

<h2>POST</h2>
<p>O método POST, é utilizado para que se possa incluir dados novos a API. Que no caso serão novos usuários ou novas tarefas.

A forma de adição de novos dados, é utilzando o JSON, como abaixo:<br>
<b>NOVO USUÁRIO:<b><br>
{<br>
"nome":"nome1",<br>
"email":"nome1@email.com",<br>
"senha":"senha123"<br>
}
  
<b>NOVA TAREFA</b><br>
{<br>
"titulo":"nova tarefa",<br>
"descricao":"mais uma tarefa",<br>
"status":"pendente",<br>
"datacriacao":"AAAA-MM-DD",<br>
"id_usuario":"1"<br>
}
</p>

<h2>DELETE</h2>
<p>O método DELETE, é utilizado para deletar qualquer usuário ou tarefas existentes na API.<br>
A forma de se deletar um usuário ou tarefas, é da seguinte forma:<br>
- http://localhost:8080/user/id <br>
- http://localhost:8080/tarefas/id <br> 

Lembrando, que aonde está escrito id devesse colocar o número da id referente ao dado a ser excluído, e todo dado seja de usuário ou tarefas tem um id único, ou seja, nunca haverá substituição de id.</p>

<h2>PUT</h2>
<p>O método PUT, é utilizado para atualizar um usuário ou tarefa. De forma individual, por meio do id.
Devendo ser feito, por meio, da ferramenta insomnia ou postman. Da seguinte forma:<br>
- http://localhost:8080/user/id
- http://localhost:8080/tarefas/id

E deve ser utilizar também o JSON, que por meio do id irá fazer as devidas modificações, que serão inseridas e atualizadas pelo JSON. Sendo utilizado para atualizar os dados de usuários e tarefas. </p>
