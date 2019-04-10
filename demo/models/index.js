const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/ths19')

module.exports.Student = require('./students')