module.exports = function (app) {
    app.post('/create_student_exam', (req, res) => {
        let x = require("../src/student_exam/create_student_exam");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student_exam', (req, res) => {
        let x = require("../src/student_exam/update_student_exam");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student_exam', (req, res) => {
        let x = require("../src/student_exam/delete_student_exam");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_student_exam', (req, res) => {
        let x = require("../src/student_exam/read_student_exam");
        console.log("X", x)
        x.main(req, res);
    })
   
}