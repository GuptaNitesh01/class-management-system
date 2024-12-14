module.exports = function (app) {
    app.post('/create_staffs', (req, res) => {
        let x = require("../src/staffs/creating_staffs");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_staffs', (req, res) => {
        let x = require("../src/staffs/updating_staffs");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_staffs', (req, res) => {
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