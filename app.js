const express = require('express')
const pug = require("pug");
const app = express()
const port = 3000
const path = require('node:path');
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
