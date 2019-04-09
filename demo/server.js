const express = require('express')
const app = express()
const path = require('path')
const file = path.join(__dirname,'file.pdf')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// const jsonParser = bodyParser.json()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
// setting up the template engine
app.set('view engine', 'ejs')

// Setting up the path for static assets
app.use(express.static(path.join(__dirname,'public')))

const people = ["Alpha","Bravo","Mike"]

// Get routes
app.get('/',(req,res) => {
    res.render('index',{people:people})
})

app.get('/home',(req,res)=> {
    res.render('home',{title : "Chinmay"})
})

app.get('/home/:name',(req,res)=> {
    res.render('home',{title : req.params.name})
})


app.get('/login',(req,res) => res.send('Successfully Logged in.'))

app.get('/logout',(req,res) => res.send("Logged out"))

app.get('/download', (req,res) => {
    res.download(file, (err) => err? console.log(err): console.log("success"))
})

// Post route

app.post('/',(req,res) => {
    // console.log(req.body.people)
    people.push(req.body.people)
    res.redirect('/')
})

// Delete route

app.delete('/',(req,res)=>{
    people.pop(req.params.people)
    res.redirect('/')
})

app.listen(3000,()=> console.log(`Server Running on port 3000...`))