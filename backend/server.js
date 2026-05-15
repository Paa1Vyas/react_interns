const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const cars = [
  { id: 1, name: 'BMW', price: '50 Lakh' },
  { id: 2, name: 'Audi', price: '45 Lakh' },
  { id: 3, name: 'Mercedes', price: '60 Lakh' }
]

app.get('/cars', (req, res) => {
  res.json(cars)
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})