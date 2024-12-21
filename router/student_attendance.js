module.exports = function (app) {
    app.post('/create_student_attendance', (req, res) => {
        let x = require("../src/student_attendances/create_student_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student_attendance', (req, res) => {
        let x = require("../src/student_attendances/update_student_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student_attendance', (req, res) => {
        let x = require("../src/student_attendances/delete_student_sttendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_student_attendance', (req, res) => {
        let x = require("../src/student_attendances/read_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_student_attendance', (req, res) => {
        let x = require("../src/student_attendances/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
   
}