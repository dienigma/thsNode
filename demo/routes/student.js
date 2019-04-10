const express = require('express')
const router = express.Router()
const db = require('../models')

// get route student data

router.get('/',(req,res) => {
    db.Student.find()
    .then((studentData) =>{
        // studentData.forEach(element => res.json(element))
        res.json(studentData)
    })
    .catch(err => res.send(err))
})

// post route - to create sudents
router.post('/',(req,res)=> {
    console.log(req.body)
    db.Student.create(req.body)
    .then(studentData => res.json({name: studentData.name, number: studentData.phone}))
    .catch(err => res.send(err))
})

// find by id routes

router.get('/:id',(req,res)=> {
    db.Student.findById(req.params.id)
    .then(studentData => res.render('student',{studentData: studentData}))
    .catch(err => res.json(err))
})

// Find by ID and update
router.put('/:id',(req,res) => {
    db.Student.findByIdAndUpdate(req.params.id,req.body)
    .then(studentData => res.json(studentData))
})

// Delete the object
router.delete('/:id',(req,res) => {
    db.Student.findOneAndRemove({"_id":req.params.id})
    .then(studentData => res.send('Deleted'))
    .catch(err => res.send(err))
})

module.exports = router