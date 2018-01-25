const express = require('express'),
      bodyParser = require('body-parser')
      app = express(),
      port = 3001


// DATA
let foods = [
  { id: 1, cuisine: "Thai", dish: "tom kha", price: 9 },
  { id: 2, cuisine: "Hawaiian", dish: "kalua pork", price: 8 },
  { id: 3, cuisine: "Mexican", dish: "tacos dorados", price: 6 },
  { id: 4, cuisine: "Vietnamese", dish: "banh mi", price: 8 },
  { id: 5, cuisine: "American", dish: "mac & cheese", price: 8 },
  { id: 6, cuisine: "Korean", dish: "rice bowl", price: 6 },
  { id: 7, cuisine: "Cuban", dish: "medianoche", price: 8 },
  { id: 8, cuisine: "Japanese", dish: "tuna roll", price: 12 },
  { id: 9, cuisine: "American", dish: "grilled cheese", price: 6 },
  { id: 10, cuisine: "Chinese", dish: "pork bao", price: 4 },
  { id: 11, cuisine: "Italian", dish: "stromboli", price: 11 }
]

let faves = []


// MIDDLEWARE
app.use(bodyParser.json())
app.use((req, res, next) => { console.log(req.method, req.url); next(); })


// ENDPOINTS
app.get('/api/foods', (req, res) => {
  res.status(200).send(foods)
})

app.get('/api/faves', (req, res) => {
  res.status(200).send(faves)
})

app.post('/api/faves', (req, res) => {
  // const { food } = req.body
  const food = req.body.food;
  if (!faves.find(fave => fave.id === food.id)) faves.push(food)
  res.status(200).send(faves)
})

app.delete('/api/faves/:id', (req, res) => {
  const indx = faves.findIndex(fave => fave.id === +req.params.id)
  faves.splice(indx, 1)
  res.status(200).send(faves)
})

app.put('/api/foods/:discount', (req, res) => {
  foods = foods.map(food => {
    let price = food.price - +req.params.discount
    price = price < 0 ? 0 : price
    return Object.assign(food, { price })
  })
  res.status(200).send(foods)
})


// LISTEN
app.listen(port, console.log(`Listening on ${port}.`))




// const food = foods.find(food => food.id === req.body.food.id)