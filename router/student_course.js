module.exports = function (app) {
    app.post('/create_student_courses', (req, res) => {
        let x = require("../src/student_course/create_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student_courses', (req, res) => {
        let x = require("../src/student_course/update_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student_courses', (req, res) => {
        let x = require("../src/student_course/delete_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_student_courses', (req, res) => {
        let x = require("../src/student_course/read_student_course");
        console.log("X", x)
        x.main(req, res);
    })
   
}