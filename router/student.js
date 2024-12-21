module.exports = function (app) {
    app.post('/create_student', (req, res) => {
        let x = require("../src/students/create_student");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_student', (req, res) => {
        let x = require("../src/students/update_student");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_student', (req, res) => {
        let x = require("../src/students/delete_student");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_student', (req, res) => {
        let x = require("../src/students/read_student");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_student', (req, res) => {
        let x = require("../src/students/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
}