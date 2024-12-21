module.exports = function (app) {
    app.post('/create_student_exam', (req, res) => {
        let x = require("../src/student_exams/create_student_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student_exam', (req, res) => {
        let x = require("../src/student_exams/update_student_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student_exam', (req, res) => {
        let x = require("../src/student_exams/delete_student_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_student_exam', (req, res) => {
        let x = require("../src/student_exams/read_student_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_exams', (req, res) => {
        let x = require("../src/student_exams/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
}