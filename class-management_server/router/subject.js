module.exports = function (app) {
    app.post('/create_subject', (req, res) => {
        let x = require("../src/subjects/create_subject");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_subject', (req, res) => {
        let x = require("../src/subjects/update_subject");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_subject', (req, res) => {
        let x = require("../src/subjects/delete_subject");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_subject', (req, res) => {
        let x = require("../src/subjects/read_subject");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_subject', (req, res) => {
        let x = require("../src/subjects/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
}