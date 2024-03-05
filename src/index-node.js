const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "hey": "NodeJswa"
  })
})

//POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

app.all('secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})