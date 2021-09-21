

const express = require('express')

const app = express.createServer(express.logger());

app.use(express.json())    // <==== parse request body as JSON

app.listen(8080)

app.post('/test', (req, res) => {
  res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
})