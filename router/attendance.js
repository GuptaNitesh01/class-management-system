module.exports = function (app) {
    app.post('/create_attendance', (req, res) => {
        let x = require("../src/attendances/create_attendances");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_attendance', (req, res) => {
        let x = require("../src/attendances/update_attendances");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_attendance', (req, res) => {
        let x = require("../src/attendances/delete_attendances");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_attendance', (req, res) => {
        let x = require("../src/attendances/read_attendances");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_attendance', (req, res) => {
        let x = require("../src/attendances/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
   
}