const express = require('express')
const router = express.Router()
const people = ["Alpha","Bravo","Mike"]
router.get('/',(req,res)=>{
    res.render('index',{people:people})
})

router.get('/home',(req,res)=> {
    res.render('home',{title : "Chinmay"})
})
// Post route

router.post('/',(req,res) => {
    // console.log(req.body.people)
    people.push(req.body.people)
    res.redirect('/')
})

// Delete route

router.delete('/',(req,res)=>{
    people.pop(req.params.people)
    res.redirect('/')
})
module.exports = router