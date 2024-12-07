module.exports = function (app) {
    app.get('/create_attendance', (req, res) => {
        let x = require("../src/attendances/creating_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/update_attendance', (req, res) => {
        let x = require("../src/attendances/updating_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/delete_attendance', (req, res) => {
        let x = require("../src/attendances/deleting_attendance");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_attendance', (req, res) => {
        let x = require("../src/attendances/reading_attendance");
        console.log("X", x)
        x.main(req, res);
    })
   
}