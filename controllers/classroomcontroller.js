var Classroom = require('../models/classroom');

exports.index = function (req, res){
        Classroom.find(function (err, response) {
            classrooms = response;
            res.send(response);
        });
};

exports.create = function (req, res) {
    var body = req.body;
    var date = new Date() + 1;
    if(!body.name || !body.available){
        res.send("Wrong infor provided, we need a name and we need a boolean named available");
    }
    else{
        var newClassroom = new Classroom({
            room_id: req.params.id,
            name: body.name,
            available: body.available,
            time: date
        });

        newClassroom.save(function(err, classroom){
            if(err)
                res.send("Database error");
            else{

                res.json({ message: 'New Classroom added' });
            }
        });
    }
};