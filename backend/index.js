require('dotenv').config();  //This makes your content in .env file available to node.js

const connectToMongo=require('./db')
connectToMongo();

var cors = require('cors')

const express = require('express')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})