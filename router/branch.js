module.exports = function (app) {
    app.post('/create_branches', (req, res) => {
        let x = require("../src/branches/create_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_branches', (req, res) => {
        let x = require("../src/branches/delete_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/reading_branches', (req, res) => {
        let x = require("../src/branches/read_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_branches', (req, res) => {
        let x = require("../src/branches/update_branches");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_branches', (req, res) => {
        let x = require("../src/branches/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
   
}