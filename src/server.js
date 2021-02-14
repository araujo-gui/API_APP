const express = require('express')
const cors = require ('cors')
const bodyParse = require ('body-parser')
const app = express()
const bd = require ('./infra/sqlite-db')
const port = 8080


app.use(bodyParse.json());
app.use(cors());

const usuarioControllers = require ('./controllers/usuarios-controllers')
const tarefasControllers = require ('./controllers/tarefas-controllers')


usuarioControllers(app, bd);
tarefasControllers (app, bd);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
