module.exports = function (app) {
    app.get('/create_staffs', (req, res) => {
        let x = require("../src/staffs/creating_staffs");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/update_staffs', (req, res) => {
        let x = require("../src/staffs/updating_staffs");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/delete_staffs', (req, res) => {
        let x = require("../src/staffs/deleting_staffs");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_staffs', (req, res) => {
        let x = require("../src/staffs/reading_staffs");
        console.log("X", x)
        x.main(req, res);
    })
    
   
}