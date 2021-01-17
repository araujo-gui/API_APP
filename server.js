const express = require('express')
const app = express()
const port = 8080

app.get('/user', (req, res) => {
  res.send({
    ID: 'Guilhermina',
    Contato:  'contato',})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
