const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (request, response) => {
  response.send('Hello Express')
})

app.listen(port, () => {
  console.log(`Hello Express listening on port ${port}`)
})
