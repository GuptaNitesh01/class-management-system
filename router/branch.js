module.exports = function (app) {
    app.post('/create_branches', (req, res) => {
        let x = require("../src/branches/creating_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_branches', (req, res) => {
        let x = require("../src/branches/deleting_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_branches', (req, res) => {
        let x = require("../src/branches/reading_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_branches', (req, res) => {
        let x = require("../src/branches/updating_branches");
        console.log("X", x)
        x.main(req, res);
    })
   
}