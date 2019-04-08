const express = require('express')
const app = express()
const path = require('path')
const file = path.join(__dirname,'file.pdf')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => {
    res.send("Hello Chinmay")
})

app.get('/home',(req,res)=> {
    res.render('index',{title : "Chinmay"})
})

app.get('/home/:name', (req,res) => {
    res.render('index',{title : req.params.name})
})

app.get('/login',(req,res) => res.send('Successfully Logged in.'))

app.get('/logout',(req,res) => res.send("Logged out"))

app.get('/download', (req,res) => {
    res.download(file, (err) => err? console.log(err): console.log("success"))
})

app.listen(3000,()=> console.log(`Server Running on port 3000...`))