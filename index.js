const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chefs = require('./data/chefs.json')
const recipes = require ("./data/recipes.json")
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
    if (id === 0) {
      res.send(chefs)
    }
    else{
    const selectedChef = chefs.find(n => n.id === id);
    res.send(selectedChef);
    }
  })

//all recipes
app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//get recipes  by chef id
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 0) {
    res.send(recipes)
  }

  else {
    const chefRecipes = recipes.filter(n => parseInt(n.chef_id) === id)
    res.send(chefRecipes)
  }
})