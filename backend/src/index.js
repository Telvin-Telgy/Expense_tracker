require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const router = require('./routes/routes')
const cors = require('cors')

app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use('/api/expense', router)

mongoose.connect(process.env.URI)
    .then(() => {
      app.listen(process.env.PORT, () => {
          console.log(`Connected to db and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
      console.log(error);  
    })