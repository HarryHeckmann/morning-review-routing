const express = require('express')
const c = require('./controller')
const app = express()

const PORT = 5001

app.get('/api/:category', c.getFoods)
app.get('/api/food/:id', c.getFood)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})