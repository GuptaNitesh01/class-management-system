module.exports = function (app) {
    app.post('/create_student_courses', (req, res) => {
        let x = require("../src/student_courses/create_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student_courses', (req, res) => {
        let x = require("../src/student_courses/update_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student_courses', (req, res) => {
        let x = require("../src/student_courses/delete_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_student_courses', (req, res) => {
        let x = require("../src/student_courses/read_student_course");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_student_course', (req, res) => {
        let x = require("../src/student_courses/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
}