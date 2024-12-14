module.exports = function (app) {
    app.post('/create_exam', (req, res) => {
        let x = require("../src/exams/create_exams");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_exam', (req, res) => {
        let x = require("../src/exams/update_exam");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_exam', (req, res) => {
        let x = require("../src/exams/delete_exam");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_exam', (req, res) => {
        let x = require("../src/exams/read_exam");
        console.log("X", x)
        x.main(req, res);
    })
   
}