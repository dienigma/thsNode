var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongooseEmail = require('passport-local-mongoose-email');

var User = new Schema({
    username:String,
    password:String
});

User.plugin(passportLocalMongooseEmail);

module.exports = mongoose.model('User', User);