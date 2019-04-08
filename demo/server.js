const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("Hello Chinmay")
})

app.get('/home',(req,res)=> res.send("This is my home page"))

app.get('/home/:name', (req,res) => {
    console.log(req.params)
    res.send(`Hey welcome ${req.params.name}`)
})

app.get('/login',(req,res) => res.send('Successfully Logged in.'))

app.get('/logout',(req,res) => res.send("Logged out"))

app.listen(3000,()=> console.log(`Server Running on port 3000...`))