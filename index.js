const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chefs = require('./data/chefs.json')
const cors = require('cors')
app.use(cors())

//test
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//all chefs
app.get('/chefs', (req, res) => {
    res.send(chefs)
  })
//get chef by id
  app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedChef = chefs.find(n => n.id === id);
    res.send(selectedChef);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})