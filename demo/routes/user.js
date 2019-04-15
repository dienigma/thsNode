const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login',(req,res)=> {
    res.render('success')
})

router.get('/',(req,res) => {
    db.User.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.post('/',(req,res)=>{
    db.User.create(req.body).exec()
    .then(res.json({message:"Successful"}))
})

router.get('/:id',(req,res) =>{
    db.User.findById(req.params.id).exec()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.put('/:id',(req,res)=>{
    db.User.findByIdAndUpdate(req.params.id,req.body).exec()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
module.exports = router