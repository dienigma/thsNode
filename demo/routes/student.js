const express = require('express')
const router = express.Router()
const db = require('../models')

// get route student data

router.get('/',(req,res) => {
    db.Student.find()
    .then((studentData) =>{
        
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

module.exports = router