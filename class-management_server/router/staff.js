module.exports = function (app) {
    app.post('/create_staffs', (req, res) => {
        let x = require("../src/staffs/create_staff");
        console.log("X", x)
        x.main(req, res);
    })
    app.put('/update_staffs', (req, res) => {
        let x = require("../src/staffs/update_staff");
        console.log("X", x)
        x.main(req, res);
    })
    app.delete('/delete_staffs', (req, res) => {
        let x = require("../src/staffs/delete_staff");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/read_staffs', (req, res) => {
        let x = require("../src/staffs/read_staff");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/get_by_list_staffs', (req, res) => {
        let x = require("../src/staffs/get_by_id");
        console.log("X", x)
        x.main(req, res);
    })
    
   
}