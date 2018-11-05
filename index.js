const express = require('express')
const utils = require('./src/utils')
const arguments = utils.arguments()
const app = express()
const port = arguments.port || 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))