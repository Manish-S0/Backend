require('dotenv').config()

const express = require('express')
const app = express()
port=3000

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get("/insta",(req,res)=>{
  res.send("hello insta")
})

app.listen(process.env.PORT)