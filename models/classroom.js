var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var classroomSchema = mongoose.Schema({
    room_id: { type: String, required: true },
    name: { type: String, required: true },
    available: { type: Boolean, required: true },
    time: {type: String, required: true}
});





// create the model for users and expose it to our app
module.exports = mongoose.model('Classroom', classroomSchema);