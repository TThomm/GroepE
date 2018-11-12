module.exports = function (app, db) {

    var classroomController = require('../controllers/classroomcontroller');

    app.get('/', classroomController.index);
    app.post('/:id', classroomController.create);
};