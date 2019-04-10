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



// Get routes
// app.get('/',(req,res) => {
//     res.render('index',{people:people})
// })

// app.get('/home',(req,res)=> {
//     res.render('home',{title : "Chinmay"})
// })

// app.get('/home/:name',(req,res)=> {
//     res.render('home',{title : req.params.name})
// })


// app.get('/login',(req,res) => res.send('Successfully Logged in.'))

// app.get('/logout',(req,res) => res.send("Logged out"))

// app.get('/download', (req,res) => {
//     res.download(file, (err) => err? console.log(err): console.log("success"))
// })



// Routes

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const studentRouter = require('./routes')
app.use('/',indexRouter)
app.use('/user',userRouter)
app.use('/students',studentRouter)
app.listen(3000,()=> console.log(`Server Running on port 3000...`))