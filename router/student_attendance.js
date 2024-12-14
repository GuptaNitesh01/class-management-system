module.exports = function (app) {
    app.post('/create_student_attendance', (req, res) => {
        let x = require("../src/courses/creating_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student_attendance', (req, res) => {
        let x = require("../src/student_attendance/update_student_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student_attendance', (req, res) => {
        let x = require("../src/student_attendance/delete_student_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_student_attendance', (req, res) => {
        let x = require("../src/student_attendance/read_student_attendance");
        console.log("X", x)
        x.main(req, res);
    })
   
}