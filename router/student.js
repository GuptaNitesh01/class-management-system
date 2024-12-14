module.exports = function (app) {
    app.post('/create_student', (req, res) => {
        let x = require("../src/students/creating_students");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student', (req, res) => {
        let x = require("../src/students/updating_students");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student', (req, res) => {
        let x = require("../src/students/deleting_students");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_student', (req, res) => {
        let x = require("../src/students/reading_students");
        console.log("X", x)
        x.main(req, res);
    })
   
}