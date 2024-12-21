module.exports = function (app) {
    app.post('/create_exam', (req, res) => {
        let x = require("../src/exams/create_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_exam', (req, res) => {
        let x = require("../src/exams/update_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_exam', (req, res) => {
        let x = require("../src/exams/delete_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_exam', (req, res) => {
        let x = require("../src/exams/read_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_exams', (req, res) => {
        let x = require("../src/exams/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
}