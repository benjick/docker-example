const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 4000

app.get('/', (req, res) => res.json({
  hello: 'World',
  foo: true,
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
