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
<p>A utilização do método GET, tem como objetivo mostrar todas as informações existentes na API.</p><br>
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
<p>A utilização do método POST, é para que se possa incluir dados novos a API. Que no caso serão novos usuários ou novas tarefas.

A forma de adiçào de novos dados, é utilzado o JSON, como abaixo:<br>
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

<h2>PUT</h2>
