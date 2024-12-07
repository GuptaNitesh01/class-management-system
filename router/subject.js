module.exports = function (app) {
    app.get('/create_subject', (req, res) => {
        let x = require("../src/subjects/creating_subjects");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/update_subject', (req, res) => {
        let x = require("../src/subjects/updating_subjects");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/delete_subject', (req, res) => {
        let x = require("../src/subjects/deleting_subjects");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_subject', (req, res) => {
        let x = require("../src/subjects/reading_subjects");
        console.log("X", x)
        x.main(req, res);
    })
   
}