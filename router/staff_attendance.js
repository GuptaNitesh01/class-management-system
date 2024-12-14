module.exports = function (app) {
    app.post('/create_staff_attendance', (req, res) => {
        let x = require("../src/staff_attendance/create_staff_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_staff_attendance', (req, res) => {
        let x = require("../src/staff_attendance/update_staff_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_staff_attendance', (req, res) => {
        let x = require("../src/staff_attendance/delete_staff_understand");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_staff_attendance', (req, res) => {
        let x = require("../src/staff_attendance/read_staff_attendance");
        console.log("X", x)
        x.main(req, res);
    })
   
}