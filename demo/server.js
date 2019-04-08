const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("Hello Chinmay")
})

app.get('/home',(req,res)=> res.send("This is my home page"))

app.listen(3000,()=> console.log(`Server Running on port 3000...`))